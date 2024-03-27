const knex = require('knex');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/v1');
const ApiError = require('./utils/ApiError');
const httpStatus = require('http-status');
const { errorConverter, errorHandler } = require('./middlewares/error');
const database = require('./database')
const app = express();
const knexConfig = require('./config/knex/knexfile');

app.use(cors({ origin: '*' }));

// v1 api routes
app.use('/api/v1', routes);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

const port = 3001;
const ip = '0.0.0.0';
app.listen(port, ip, function () {
	console.log(`Example app listening on port ${port}`)
})