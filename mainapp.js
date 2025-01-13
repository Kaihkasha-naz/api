const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
 const connectDB = require('./config/db.js');

 const authRoutes = require('./routes/authRoutes');
 const todoRoutes = require('./routes/todoRoutes');

//middleware
const app = express();
 app.use(express.json());

 app.use('/auth', authRoutes);
 app.use('/todos', todoRoutes);

 //server configuration
const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log(`server listening at port no ${port}`)
})

