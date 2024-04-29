// backend/services/messageService.js

const Message = require('../models/Message');

// Service functions for messages
const messageService = {
  // Create a new message
  createMessage: async (messageData) => {
    try {
      const newMessage = new Message(messageData);
      await newMessage.save();
      return newMessage;
    } catch (error) {
      throw new Error('Failed to create message');
    }
  },

  // Retrieve all messages for an order
  getAllMessagesForOrder: async (orderId) => {
    try {
      const messages = await Message.find({ order: orderId });
      return messages;
    } catch (error) {
      throw new Error('Failed to retrieve messages');
    }
  },

  // Get message by ID
  getMessageById: async (messageId) => {
    try {
      const message = await Message.findById(messageId);
      return message;
    } catch (error) {
      throw new Error('Failed to retrieve message');
    }
  },

  // Update message by ID
  updateMessageById: async (messageId, messageData) => {
    try {
      const updatedMessage = await Message.findByIdAndUpdate(messageId, messageData, { new: true });
      return updatedMessage;
    } catch (error) {
      throw new Error('Failed to update message');
    }
  },

  // Delete message by ID
  deleteMessageById: async (messageId) => {
    try {
      await Message.findByIdAndDelete(messageId);
    } catch (error) {
      throw new Error('Failed to delete message');
    }
  }
};

module.exports = messageService;
