// // backend/routes/authRoutes.js

// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// // Authentication routes
// router.post('/login', authController.login);

// module.exports = router;

// backend/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Login route
router.post('/login', AuthController.login);

module.exports = router;
