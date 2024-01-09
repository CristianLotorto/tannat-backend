const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({
              message: 'Provide a Token',
              data: null,
              error: true,
           });
  }else{
      jwt.verify(token, process.env.TOKEN_SECRET, (err, admin) => {

        if (err) {
            return res.status(403).json({
                message: 'Provide a correct Token',
                data: null,
                error: true,
             });
        }

            req.admin = admin;

            next();
          });
    }
}

module.exports = { verifyToken }


// const firebaseApp = require('../helper/firebase');

// const verifyToken = async (req, res, next) => {
//   const { token } = req.headers;
//   if (!token) {
//     return res.status(400).json({
//       message: 'Provide a Token',
//       data: null,
//       error: true,
//     });
//   }
//   try {
//     const response = await firebaseApp.auth().verifyIdToken(token);
//     req.headers.firebaseUid = response.user_id;
//     return next();
//   } catch (error) {
//     return res.status(401).json({
//       message: error.toString(),
//       data: null,
//       error: true,
//     });
//   }
// };

// module.exports = verifyToken;
