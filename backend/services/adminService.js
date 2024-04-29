// backend/services/AdminService.js

const Admin = require('../models/Admin');

const AdminService = {
  // Create admin
  createAdmin: async (adminData) => {
    try {
      const admin = new Admin(adminData);
      await admin.save();
      return admin;
    } catch (error) {
      throw new Error('Could not create admin');
    }
  },

  // Get all admins
  getAllAdmins: async () => {
    try {
      const admins = await Admin.find();
      return admins;
    } catch (error) {
      throw new Error('Could not fetch admins');
    }
  },

  // Get admin by ID
  getAdminById: async (id) => {
    try {
      const admin = await Admin.findById(id);
      return admin;
    } catch (error) {
      throw new Error('Could not fetch admin');
    }
  },

  // Update admin by ID
  updateAdminById: async (id, newData) => {
    try {
      const admin = await Admin.findByIdAndUpdate(id, newData, { new: true });
      if (!admin) {
        throw new Error('Admin not found');
      }
      return admin;
    } catch (error) {
      throw new Error('Could not update admin');
    }
  },

  // Delete admin by ID
  deleteAdminById: async (id) => {
    try {
      const admin = await Admin.findByIdAndDelete(id);
      if (!admin) {
        throw new Error('Admin not found');
      }
    } catch (error) {
      throw new Error('Could not delete admin');
    }
  }
};

module.exports = AdminService;
