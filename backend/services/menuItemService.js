// backend/services/menuItemService.js

const MenuItem = require('../models/MenuItem');

// Service functions for menu items
const menuItemService = {
  // Create a new menu item
  createMenuItem: async (menuItemData) => {
    try {
      const newMenuItem = new MenuItem(menuItemData);
      await newMenuItem.save();
      return newMenuItem;
    } catch (error) {
      throw new Error('Failed to create menu item');
    }
  },

  // Retrieve all menu items
  getAllMenuItems: async () => {
    try {
      const menuItems = await MenuItem.find();
      return menuItems;
    } catch (error) {
      throw new Error('Failed to retrieve menu items');
    }
  },

  // Get menu item by ID
  getMenuItemById: async (menuItemId) => {
    try {
      const menuItem = await MenuItem.findById(menuItemId);
      return menuItem;
    } catch (error) {
      throw new Error('Failed to retrieve menu item');
    }
  },

  // Update menu item by ID
  updateMenuItemById: async (menuItemId, menuItemData) => {
    try {
      const updatedMenuItem = await MenuItem.findByIdAndUpdate(menuItemId, menuItemData, { new: true });
      return updatedMenuItem;
    } catch (error) {
      throw new Error('Failed to update menu item');
    }
  },

  // Delete menu item by ID
  deleteMenuItemById: async (menuItemId) => {
    try {
      await MenuItem.findByIdAndDelete(menuItemId);
    } catch (error) {
      throw new Error('Failed to delete menu item');
    }
  }
};

module.exports = menuItemService;
