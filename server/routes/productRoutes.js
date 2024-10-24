const express = require('express');
const {
  addProduct,
  getProductById,
  addRating,
  addComment
} = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', addProduct);
router.get('/:id', getProductById);
router.post('/:id/rating', authMiddleware, addRating);
router.post('/:id/comment', authMiddleware, addComment);

module.exports = router;
