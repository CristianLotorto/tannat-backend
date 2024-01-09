const superAdmin = require('../models/SuperAdmin');
const bcrypt = require('bcrypt');

const updateAdmin = async (req, res) => {
  const { id } = req.params;
  const {
    username,
    password
  } = req.body;

  try {
    const existingSuperAdmin = await superAdmin.findOne({ _id: id });

    if (!existingSuperAdmin) {
      return res.status(404).json({
        message: 'Super Admin not found',
        data: null,
        error: true,
      });
    }

    const result = await superAdmin.findByIdAndUpdate(id, { username, password }, { new: true });

    if (!result) {
      return res.status(404).json({
        message: 'Super Admin not found',
        data: null,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Super Admin Updated',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

// const createSuperAdmin = async (req, res) => {
//   const {
//     username,
//     password,
//     role
//   } = req.body;

//   try {
//     const existingSuperAdmin = await superAdmin.findOne({ username });

//     if (existingSuperAdmin) {
//       return res.status(400).json({
//         message: 'User already exists',
//         data: null,
//         error: true,
//       });
//     }

//     const saltRounds = parseInt(process.env.SALT_ROUNDS)
//     const hash = await bcrypt.genSalt(saltRounds)
//     const hashedPass = await bcrypt.hash(password, hash)

//     const result = await superAdmin.create({
//       username,
//       password: hashedPass,
//       role
//     });

//     return res.status(201).json({
//       message: 'Admin created',
//       data: result,
//       error: false,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error,
//       data: null,
//       error: true,
//     });
//   }
// };

module.exports = {
  // createSuperAdmin,
  updateAdmin,
};
