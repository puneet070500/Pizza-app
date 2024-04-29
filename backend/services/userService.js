// backend/services/userService.js

const User = require('../models/User');

// Service functions for users
const userService = {
  // Create a new user
  createUser: async (userData) => {
    try {
      const newUser = new User(userData);
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new Error('Failed to create user');
    }
  },

  // Retrieve all users
  getAllUsers: async () => {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw new Error('Failed to retrieve users');
    }
  },

  // Get user by ID
  getUserById: async (userId) => {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      throw new Error('Failed to retrieve user');
    }
  },

  // Update user by ID
  updateUserById: async (userId, userData) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
      return updatedUser;
    } catch (error) {
      throw new Error('Failed to update user');
    }
  },

  // Delete user by ID
  deleteUserById: async (userId) => {
    try {
      await User.findByIdAndDelete(userId);
    } catch (error) {
      throw new Error('Failed to delete user');
    }
  }
};

module.exports = userService;
