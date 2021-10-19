//Load the express module installed to constant express
var express = require('express');
// Load the Nodejs module call path, which used to manipulated the path of files
var path = require('path');
// in middleware ExpressJS to encode and set security
var cookieParser = require('cookie-parser');
//HTTP request logger middleware
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
//Execute and use express method translating data to json() format as App level middlewares.
app.use(express.json());
//method inbuilt in express to recognize the incoming Request Object as strings or arrays. 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
// If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api', indexRouter);
app.use('/news', indexRouter);

// app.use('/users', usersRouter);

module.exports = app;
