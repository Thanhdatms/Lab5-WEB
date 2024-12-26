require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the CORS middleware

// Routers
// const indexRouter = require('./routes/auth');
// const admin_api = require('./routes/admin/index');
const web_api = require('./routes/web/index');

const app = express();
app.use(express.json());

// Middleware for parsing URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Initialize MySQL DB
const { sequelize } = require('./databases/init.mysql');

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true, 
};

app.use(cors(corsOptions)); // Enable CORS with the defined options

// App routes
app.use('/v1/web', web_api);

/* GET home page. */
app.get('/', function(req, res, next) {
  res.json({
    msg: 'Hello World',
  });
});

app.post('/', function(req, res, next) {
  console.log(req.body);
  res.json({
    msg: 'Hello World',
  });
});

// Handling errors
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    status: 'error',
    code: statusCode,
    message: error.message || 'Internal Server Error',
  });
});

module.exports = app;
