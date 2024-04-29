// backend/controllers/paymentModeController.js

const paymentModeService = require('../services/paymentModeService');

// Controller functions for payment modes
const paymentModeController = {
  // Create a new payment mode
  createPaymentMode: async (req, res) => {
    try {
      const newPaymentMode = await paymentModeService.createPaymentMode(req.body);
      res.status(201).json(newPaymentMode);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get all payment modes
  getAllPaymentModes: async (req, res) => {
    try {
      const paymentModes = await paymentModeService.getAllPaymentModes();
      res.json(paymentModes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get payment mode by ID
  getPaymentModeById: async (req, res) => {
    try {
      const paymentModeId = req.params.id;
      const paymentMode = await paymentModeService.getPaymentModeById(paymentModeId);
      if (!paymentMode) {
        return res.status(404).json({ message: 'Payment mode not found' });
      }
      res.json(paymentMode);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update payment mode by ID
  updatePaymentModeById: async (req, res) => {
    try {
      const paymentModeId = req.params.id;
      const updatedPaymentMode = await paymentModeService.updatePaymentModeById(paymentModeId, req.body);
      res.json(updatedPaymentMode);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete payment mode by ID
  deletePaymentModeById: async (req, res) => {
    try {
      const paymentModeId = req.params.id;
      await paymentModeService.deletePaymentModeById(paymentModeId);
      res.json({ message: 'Payment mode deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = paymentModeController;
