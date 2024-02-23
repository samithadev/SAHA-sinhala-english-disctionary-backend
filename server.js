
// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create an Express app
const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB (Make sure you have MongoDB running locally or provide a connection string)
mongoose.connect( {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to MongoDB database');
});

// API routes
const wordRouter = require('./routes/api');
app.use('/api/words', wordRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
