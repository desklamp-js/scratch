const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const userController = require('./server/userController');
const postController = require('./server/postController');

const app = express();

const mongoURI = 'mongodb://localhost:27017/test';
mongoose.connect(mongoURI);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '../testApp')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/signup',
  userController.createUser,
  (req, res) => {
    res.status(200).json({
      status: 'Signup successful!',
    });
  }
);

app.post('/login',
  userController.checkLogin,
  (req, res) => {
    res.status(200).json({
      status: 'Login successful!',
    });
  }
);

app.get('/posts', postController.getAllPosts);
app.post('/posts', postController.createPost);

app.listen(3000, () => {
  console.log('listening on 3000');
});

module.exports = app;
