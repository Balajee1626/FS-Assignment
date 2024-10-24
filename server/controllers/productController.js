const Product = require('../models/Product');

// Add a new product
exports.addProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const product = new Product({ name, description, price });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add product', error });
  }
};

// Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve product', error });
  }
};

// Add a rating to a product
exports.addRating = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const { rating } = req.body;
    product.ratings.push(rating);
    await product.save();
    res.json({ message: 'Rating added', product });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add rating', error });
  }
};

// Add a comment to a product
exports.addComment = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const { text } = req.body;
    product.comments.push({ text, date: new Date(), user: req.user.id });
    await product.save();
    res.json({ message: 'Comment added', product });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add comment', error });
  }
};
