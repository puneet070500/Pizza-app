// backend/controllers/userController.js

const userService = require('../services/userService');

// Controller functions for users
const userController = {
  // Create a new user
  createUser: async (req, res) => {
    try {
      const newUser = await userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get user by ID
  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await userService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update user by ID
  updateUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedUser = await userService.updateUserById(userId, req.body);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete user by ID
  deleteUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      await userService.deleteUserById(userId);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = userController;
