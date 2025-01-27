const { Router } = require('express');
const ratingsController = require('../controllers/ratingsController');

const ratingsRouter = Router();

ratingsRouter
  .route('/')
  .post(ratingsController.rateMovie)
  

ratingsRouter.route('/:filmId').get(ratingsController.getRating);


module.exports = ratingsRouter;
