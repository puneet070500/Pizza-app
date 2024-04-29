// backend/models/PaymentMode.js

const mongoose = require('mongoose');

const paymentModeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // Add more fields as needed
}, { timestamps: true });

const PaymentMode = mongoose.model('PaymentMode', paymentModeSchema);

module.exports = PaymentMode;
