const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/UrbanCart");

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log("server is running on port  localhost:3000");
});
