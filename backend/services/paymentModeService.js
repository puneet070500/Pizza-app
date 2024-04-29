// backend/services/paymentModeService.js

const PaymentMode = require('../models/PaymentMode');

// Service functions for payment modes
const paymentModeService = {
  // Create a new payment mode
  createPaymentMode: async (paymentModeData) => {
    try {
      const newPaymentMode = new PaymentMode(paymentModeData);
      await newPaymentMode.save();
      return newPaymentMode;
    } catch (error) {
      throw new Error('Failed to create payment mode');
    }
  },

  // Retrieve all payment modes
  getAllPaymentModes: async () => {
    try {
      const paymentModes = await PaymentMode.find();
      return paymentModes;
    } catch (error) {
      throw new Error('Failed to retrieve payment modes');
    }
  },

  // Get payment mode by ID
  getPaymentModeById: async (paymentModeId) => {
    try {
      const paymentMode = await PaymentMode.findById(paymentModeId);
      return paymentMode;
    } catch (error) {
      throw new Error('Failed to retrieve payment mode');
    }
  },

  // Update payment mode by ID
  updatePaymentModeById: async (paymentModeId, paymentModeData) => {
    try {
      const updatedPaymentMode = await PaymentMode.findByIdAndUpdate(paymentModeId, paymentModeData, { new: true });
      return updatedPaymentMode;
    } catch (error) {
      throw new Error('Failed to update payment mode');
    }
  },

  // Delete payment mode by ID
  deletePaymentModeById: async (paymentModeId) => {
    try {
      await PaymentMode.findByIdAndDelete(paymentModeId);
    } catch (error) {
      throw new Error('Failed to delete payment mode');
    }
  }
};

module.exports = paymentModeService;
