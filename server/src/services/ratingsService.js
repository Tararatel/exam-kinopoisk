const { Rating } = require('../../db/models');

const createOrUpdateRating = async ({ filmId, rating }) => {
  const existingRating = await Rating.findOne({ where: { filmId } });

  if (existingRating) {
    existingRating.rating = rating;
    await existingRating.save();
  } else {
    await Rating.create({ filmId, rating });
  }

  return { filmId, rating };
};

const getRating = async (filmId) => {
  const rating = await Rating.findOne({ where: { filmId } });

  return rating ? rating.rating : null;
};

module.exports = {
  createOrUpdateRating,
  getRating,
};
