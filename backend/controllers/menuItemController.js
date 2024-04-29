// backend/controllers/menuItemController.js

const menuItemService = require('../services/menuItemService');

// Controller functions for menu items
const menuItemController = {
  // Create a new menu item
  createMenuItem: async (req, res) => {
    try {
      const newMenuItem = await menuItemService.createMenuItem(req.body);
      res.status(201).json(newMenuItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get all menu items
  getAllMenuItems: async (req, res) => {
    try {
      const menuItems = await menuItemService.getAllMenuItems();
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get menu item by ID
  getMenuItemById: async (req, res) => {
    try {
      const menuItemId = req.params.id;
      const menuItem = await menuItemService.getMenuItemById(menuItemId);
      if (!menuItem) {
        return res.status(404).json({ message: 'Menu item not found' });
      }
      res.json(menuItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update menu item by ID
  updateMenuItemById: async (req, res) => {
    try {
      const menuItemId = req.params.id;
      const updatedMenuItem = await menuItemService.updateMenuItemById(menuItemId, req.body);
      res.json(updatedMenuItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete menu item by ID
  deleteMenuItemById: async (req, res) => {
    try {
      const menuItemId = req.params.id;
      await menuItemService.deleteMenuItemById(menuItemId);
      res.json({ message: 'Menu item deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = menuItemController;
