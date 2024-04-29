// // backend/services/authService.js

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const config = require('../config/config');

// // Service functions for authentication
// const authService = {
//   // Login user
//   login: async (username, password) => {
//     const user = await User.findOne({ username });
//     if (!user) {
//       throw new Error('User not found');
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       throw new Error('Invalid password');
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id, username: user.username }, config.jwtSecret, { expiresIn: '1h' });
//     return token;
//   },

//   // Verify JWT token
//   verifyToken: async (token) => {
//     return new Promise((resolve, reject) => {
//       jwt.verify(token, config.jwtSecret, (err, decoded) => {
//         if (err) {
//           return reject(err);
//         }
//         resolve(decoded);
//       });
//     });
//   }
// };

// module.exports = authService;

// backend/services/AuthService.js

const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const AuthService = {
  // Login user and generate token
  login: async (username, password) => {
    const admin = await Admin.findOne({ username });
    if (!admin || admin.password !== password) {
      throw new Error('Invalid username or password');
    }
    const token = jwt.sign({ userId: admin._id }, 'your_secret_key', { expiresIn: '1h' });
    return token;
  }
};

module.exports = AuthService;
