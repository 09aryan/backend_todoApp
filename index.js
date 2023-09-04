const express = require('express');
const app = express();

// Load config from env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request body
app.use(express.json());

// Import routes for TODO API
const todoRoutes = require("./routes/todos");

// Mount the TODO API routes
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
    console.log("App is running successfully");
});

// Connection to database
const dbConnect = require("./config/database");
dbConnect();

// Default route
app.get("/", (req, res) => {
    res.send("<h1>This is homepage</h1>");
});
