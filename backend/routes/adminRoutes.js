// backend/routes/adminRoutes.js

const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');

// Admin routes
router.post('/', AdminController.createAdmin);
router.get('/', AdminController.getAllAdmins);
router.get('/:id', AdminController.getAdminById);
router.put('/:id', AdminController.updateAdminById);
router.delete('/:id', AdminController.deleteAdminById);

module.exports = router;
