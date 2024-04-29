const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/menuItemController');
const authMiddleware = require('../middleware/authMiddleware');

// Menu item routes
router.post('/', authMiddleware, menuItemController.createMenuItem);
router.get('/', menuItemController.getAllMenuItems);
router.get('/:id', menuItemController.getMenuItemById);
router.put('/:id', authMiddleware, menuItemController.updateMenuItemById);
router.delete('/:id', authMiddleware, menuItemController.deleteMenuItemById);

module.exports = router;