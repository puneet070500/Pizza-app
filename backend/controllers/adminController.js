// backend/controllers/AdminController.js

const AdminService = require('../services/AdminService');

const AdminController = {
  // Create admin
  createAdmin: async (req, res) => {
    try {
      const admin = await AdminService.createAdmin(req.body);
      res.status(201).json(admin);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Get all admins
  getAllAdmins: async (req, res) => {
    try {
      const admins = await AdminService.getAllAdmins();
      res.json(admins);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get admin by ID
  getAdminById: async (req, res) => {
    try {
      const admin = await AdminService.getAdminById(req.params.id);
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
      res.json(admin);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update admin by ID
  updateAdminById: async (req, res) => {
    try {
      const admin = await AdminService.updateAdminById(req.params.id, req.body);
      res.json(admin);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete admin by ID
  deleteAdminById: async (req, res) => {
    try {
      await AdminService.deleteAdminById(req.params.id);
      res.json({ message: 'Admin deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = AdminController;
