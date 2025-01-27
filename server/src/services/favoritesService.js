const { Favorite } = require('../../db/models');

const findAllFavorites = async () =>
  Favorite.findAll({
    order: [['createdAt', 'DESC']],
  });

const createFavorite = async ({ filmId, title, year, posterUrl }) =>
  Favorite.create({
    filmId,
    title,
    year,
    posterUrl,
  });

const deleteFavoriteById = async (filmId) => {
  const favorite = await Favorite.findOne({ where: { filmId } });

  if (!favorite) {
    return { success: false, status: 404, message: 'Movie not found in favorites' };
  }

  await Favorite.destroy({ where: { filmId } });
  return { success: true };
};

module.exports = {
  findAllFavorites,
  createFavorite,
  deleteFavoriteById,
};
