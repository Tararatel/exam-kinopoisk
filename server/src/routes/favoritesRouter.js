const { Router } = require('express');
const favoritesController = require('../controllers/favoritesController');

const favoritesRouter = Router();

favoritesRouter
  .route('/')
  .get(favoritesController.getAllFavorites)
  .post(favoritesController.createFavorite);

favoritesRouter.route('/:filmId').delete(favoritesController.deleteFavorite);

module.exports = favoritesRouter;
