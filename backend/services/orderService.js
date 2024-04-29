// backend/services/orderService.js

const Order = require('../models/Order');

// Service functions for orders
const orderService = {
  // Create a new order
  createOrder: async (orderData) => {
    try {
      const newOrder = new Order(orderData);
      await newOrder.save();
      return newOrder;
    } catch (error) {
      throw new Error('Failed to create order');
    }
  },

  // Retrieve all orders
  getAllOrders: async () => {
    try {
      const orders = await Order.find();
      return orders;
    } catch (error) {
      throw new Error('Failed to retrieve orders');
    }
  },

  // Get order by ID
  getOrderById: async (orderId) => {
    try {
      const order = await Order.findById(orderId);
      return order;
    } catch (error) {
      throw new Error('Failed to retrieve order');
    }
  },

  // Update order by ID
  updateOrderById: async (orderId, orderData) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(orderId, orderData, { new: true });
      return updatedOrder;
    } catch (error) {
      throw new Error('Failed to update order');
    }
  },

  // Delete order by ID
  deleteOrderById: async (orderId) => {
    try {
      await Order.findByIdAndDelete(orderId);
    } catch (error) {
      throw new Error('Failed to delete order');
    }
  }
};

module.exports = orderService;
