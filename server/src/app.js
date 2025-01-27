const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const favoritesRouter = require('./routes/favoritesRouter');
const ratingsRouter = require('./routes/ratingsRouter')

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/favorites', favoritesRouter);
app.use('/api/ratings', ratingsRouter);

module.exports = app;
