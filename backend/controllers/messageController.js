// backend/controllers/messageController.js

const messageService = require('../services/messageService');

// Controller functions for messages
const messageController = {
  // Create a new message
  createMessage: async (req, res) => {
    try {
      const newMessage = await messageService.createMessage(req.body);
      res.status(201).json(newMessage);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get all messages for an order
  getAllMessagesForOrder: async (req, res) => {
    try {
      const orderId = req.params.orderId;
      const messages = await messageService.getAllMessagesForOrder(orderId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get message by ID
  getMessageById: async (req, res) => {
    try {
      const messageId = req.params.id;
      const message = await messageService.getMessageById(messageId);
      if (!message) {
        return res.status(404).json({ message: 'Message not found' });
      }
      res.json(message);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update message by ID
  updateMessageById: async (req, res) => {
    try {
      const messageId = req.params.id;
      const updatedMessage = await messageService.updateMessageById(messageId, req.body);
      res.json(updatedMessage);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete message by ID
  deleteMessageById: async (req, res) => {
    try {
      const messageId = req.params.id;
      await messageService.deleteMessageById(messageId);
      res.json({ message: 'Message deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = messageController;
