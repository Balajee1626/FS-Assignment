const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  ratings: [Number],
  comments: [{ text: String, date: Date, user: String }],
});

module.exports = mongoose.model('Product', ProductSchema);
