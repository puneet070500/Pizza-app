// backend/controllers/authController.js

const authService = require('../services/authService');

// Controller functions for authentication
const authController = {
  // Login user
  login: async (req, res) => {
    const { username, password } = req.body;
    try {
      const token = await authService.login(username, password);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
};

module.exports = authController;
