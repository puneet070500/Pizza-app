// backend/routes/messageRoutes.js

const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Message routes
router.post('/', messageController.createMessage);
router.get('/:orderId', messageController.getAllMessagesForOrder);
router.get('/:id', messageController.getMessageById);
router.put('/:id', messageController.updateMessageById);
router.delete('/:id', messageController.deleteMessageById);

module.exports = router;
