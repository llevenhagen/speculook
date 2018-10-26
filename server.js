//Require Express
const express = require('express');
const app = express();
//Require Mongoose
const mongoose = require('mongoose');
//Require bcrypt
const bcrypt = require('bcrypt');
//Require Schema
const Users = require('./models/users.js');
const seed = require('./models/userSeed.js');
//Express
app.use(express.json());
app.use(express.static('public'));
//Require Controller
const usersController = require('./controllers/users.js');

//Call Controller
app.use('/users', usersController);

//Mongoose Middleware
mongoose.connect('mongodb://localhost:27017/speculook', { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
  console.log('Connected to Mongoose');
});

// Users.create(seed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added users');
// })

//Listener
app.listen(3000, ()=>{
  console.log('Listening..');
});
