// backend/routes/paymentModeRoutes.js

const express = require('express');
const router = express.Router();
const paymentModeController = require('../controllers/paymentModeController');

// Payment mode routes
router.post('/', paymentModeController.createPaymentMode);
router.get('/', paymentModeController.getAllPaymentModes);
router.get('/:id', paymentModeController.getPaymentModeById);
router.put('/:id', paymentModeController.updatePaymentModeById);
router.delete('/:id', paymentModeController.deletePaymentModeById);

module.exports = router;
