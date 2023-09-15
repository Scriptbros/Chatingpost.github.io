const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your_database', { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes
const postRoutes = require('./routes/posts'); // Example routes, you'll need to create these
app.use('/posts', postRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
