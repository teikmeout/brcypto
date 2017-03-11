'use strict';
// requiring environmental keys
require('dotenv').config({ silent: true });

const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000,
      morgan = require('morgan'),
      mustache = require('mustache-express'),
      bodyParser = require('body-parser');

// setting up views
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// public folder
app.use(express.static(__dirname + '/public'));

// setting up the logger colors
app.use(morgan('dev'));

// setting up body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// setting up a route
app.get('/', (req, res) => {
  res.render('index');
});

const loginController = require('./controllers/login')
app.use('/login', loginController);

app.listen(port, ()=> {
  console.log(`dumplings on ${port}`);
})
