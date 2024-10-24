const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');
const usersData = require('./data/users.json');
const productsData = require('./data/products.json');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('MongoDB connected');
    await User.deleteMany({});
    await Product.deleteMany({});
    await User.insertMany(usersData);
    await Product.insertMany(productsData);
    console.log('Sample data loaded');
    mongoose.disconnect();
  })
  .catch(err => console.error('MongoDB connection error:', err));
