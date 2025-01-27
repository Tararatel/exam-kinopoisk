const ratingsService = require('../services/ratingsService');

const rateMovie = async (req, res) => {
  try {
    const { filmId, rating } = req.body;

    if (!filmId || rating === undefined) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newRating = await ratingsService.createOrUpdateRating({
      filmId,
      rating,
    });

    return res.status(201).json(newRating);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const getRating = async (req, res) => {
  try {
    const { filmId } = req.params;

    if (!filmId) {
      return res.status(400).json({ message: 'Film ID is required' });
    }

    const rating = await ratingsService.getRating(filmId);

    if (!rating) {
      return res.status(404).json({ message: 'Rating not found' });
    }

    return res.status(200).json({ filmId, rating });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  rateMovie,
  getRating,
};
