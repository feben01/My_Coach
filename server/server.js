// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');  // Load dotenv
const authRoute = require('./routes/authRoute');
const fitnessProfileRoutes = require('./routes/fitnessProfileRoutes');
const cors = require('cors');



// Load environment variables from .env file
dotenv.config();

// Check if MONGO_URI is loaded correctly
if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is not defined in the .env file');
  process.exit(1);
}

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());  // This will allow requests from any origin
// Routes
app.use('/api/auth', authRoute);
app.use('/api', fitnessProfileRoutes);

// MongoDB connection using the URI from the .env file
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
