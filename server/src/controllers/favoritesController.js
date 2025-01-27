const favoritesService = require('../services/favoritesService');

const getAllFavorites = async (req, res) => {
  try {
    const favorites = await favoritesService.findAllFavorites();
    return res.status(200).json(favorites);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const createFavorite = async (req, res) => {
  try {
    const { filmId, title, year, posterUrl } = req.body;

    if (!filmId || !title || !year) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newFavorite = await favoritesService.createFavorite({
      filmId,
      title,
      year,
      posterUrl,
    });

    return res.status(201).json(newFavorite);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ message: 'Movie already in favorites' });
    }
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const deleteFavorite = async (req, res) => {
  try {
    const { filmId } = req.params;
    const result = await favoritesService.deleteFavoriteById(filmId);

    if (!result.success) {
      return res.status(result.status).json({ message: result.message });
    }

    return res.status(200).json({ message: 'Movie removed from favorites' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllFavorites,
  createFavorite,
  deleteFavorite,
};
