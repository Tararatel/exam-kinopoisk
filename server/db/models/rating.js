'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate(models) {
    }
  }

  Rating.init(
    {
      filmId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 1,
          max: 10,
        },
      },
    },
    {
      sequelize,
      modelName: 'Rating',
      tableName: 'Ratings',
    },
  );

  return Rating;
};
