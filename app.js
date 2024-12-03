var express = require('express');
var cors = require('cors');
var path = require('path');

var app = express();

// Enable CORS to allow requests from different origins
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Simple route to respond to frontend fetch requests
app.get('/', (req, res) => {
  res.json({ message: "Hello from backend!" });
}); 

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
