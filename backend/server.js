const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const port = 3001;

// Kết nối tới MongoDB
mongoose.connect('mongodb://localhost:27017/foodmap', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Middleware để parse JSON và xử lý CORS
app.use(express.json());
app.use(cors());

// Định nghĩa mô hình người dùng
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }]
});

const User = mongoose.model('User', userSchema);

// Định nghĩa mô hình nhà hàng
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  cuisine: { type: String, required: true },
  rating: { type: Number, default: 0 },
  reviews: [{ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
  }]
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Route cơ bản
app.get('/', (req, res) => {
  res.send('Welcome to Food Map API!');
});

// Route để đăng ký người dùng mới
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error });
  }
});

// Route để đăng nhập người dùng
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: 'Error logging in', error });
  }
});

// Middleware để xác thực người dùng
const authenticate = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Route để lấy danh sách nhà hàng
app.get('/restaurants', async (req, res) => {
  try {
    const { keyword, cuisine, rating, location } = req.query;
    const query = {};
    if (keyword) query.name = { $regex: keyword, $options: 'i' };
    if (cuisine) query.cuisine = cuisine;
    if (rating) query.rating = { $gte: rating };
    if (location) query.location = { $regex: location, $options: 'i' };
    const restaurants = await Restaurant.find(query);
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching restaurants', error });
  }
});

// Route để thêm nhà hàng mới
app.post('/restaurants', authenticate, async (req, res) => {
  try {
    const newRestaurant = new Restaurant(req.body);
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(400).json({ message: 'Error adding restaurant', error });
  }
});

// Route để lấy thông tin chi tiết của một nhà hàng
app.get('/restaurants/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id).populate('reviews.user', 'username');
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching restaurant', error });
  }
});

// Route để cập nhật thông tin nhà hàng
app.put('/restaurants/:id', authenticate, async (req, res) => {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRestaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(updatedRestaurant);
  } catch (error) {
    res.status(400).json({ message: 'Error updating restaurant', error });
  }
});

// Route để xóa nhà hàng
app.delete('/restaurants/:id', authenticate, async (req, res) => {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!deletedRestaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting restaurant', error });
  }
});

// Route để thêm đánh giá cho nhà hàng
app.post('/restaurants/:id/reviews', authenticate, async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    const review = { user: req.userId, rating, comment };
    restaurant.reviews.push(review);
    await restaurant.save();
    res.status(201).json({ message: 'Review added successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error adding review', error });
  }
});

// Route để lưu nhà hàng yêu thích
app.post('/favorites/:id', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (!user.favorites.includes(req.params.id)) {
      user.favorites.push(req.params.id);
      await user.save();
    }
    res.status(200).json({ message: 'Restaurant added to favorites' });
  } catch (error) {
    res.status(400).json({ message: 'Error adding to favorites', error });
  }
});

// Route để lấy danh sách nhà hàng yêu thích
app.get('/favorites', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate('favorites');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user.favorites);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching favorites', error });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});