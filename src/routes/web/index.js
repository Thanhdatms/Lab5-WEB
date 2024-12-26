const express = require('express');

const userRouter = require('./users');
const productRouter = require('./products');
const emailRouter = require('./email');
const imageRouter = require('./images');

const web_api = express();

web_api.use('/users', userRouter);
web_api.use('/products', productRouter);
web_api.use('/email', emailRouter)
web_api.use('/media', imageRouter)

module.exports = web_api;