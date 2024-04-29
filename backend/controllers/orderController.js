// backend/controllers/orderController.js

const orderService = require('../services/orderService');

// Controller functions for orders
const orderController = {
  // Create a new order
  createOrder: async (req, res) => {
    try {
      const newOrder = await orderService.createOrder(req.body);
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get all orders
  getAllOrders: async (req, res) => {
    try {
      const orders = await orderService.getAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get order by ID
  getOrderById: async (req, res) => {
    try {
      const orderId = req.params.id;
      const order = await orderService.getOrderById(orderId);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update order by ID
  updateOrderById: async (req, res) => {
    try {
      const orderId = req.params.id;
      const updatedOrder = await orderService.updateOrderById(orderId, req.body);
      res.json(updatedOrder);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete order by ID
  deleteOrderById: async (req, res) => {
    try {
      const orderId = req.params.id;
      await orderService.deleteOrderById(orderId);
      res.json({ message: 'Order deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = orderController;
