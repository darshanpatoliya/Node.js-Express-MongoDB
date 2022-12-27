const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

//our own middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware ✌️');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//routes
app.use('/api/v1/tours', tourRouter); //mounting a new router on a route
app.use('/api/v1/users', userRouter); //mounting a new router on a route

module.exports = app;
