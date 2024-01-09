const superAdmin = require('../models/SuperAdmin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAuth = async (req, res) => {
    const {
        username,
        password
    } = req.body;
  try {
    const admin = await superAdmin.findOne({ username });

    if (admin) {
        const validate = await bcrypt.compare(password, admin.password)
        if (validate){
            const accessToken = jwt.sign({username,password}, process.env.TOKEN_SECRET, {expiresIn: '1800s'})
            return res.status(201).json({
                message: 'User found',
                data: accessToken,
                error: false,
              });
        }
    }

    return res.status(404).json({
      message: 'User not found',
      data: null,
      error: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.toString(),
      data: null,
      error: true,
    });
  }
};

module.exports = { getAuth };
