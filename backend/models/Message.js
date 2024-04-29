// backend/models/Message.js

const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  // Add more fields as needed
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
