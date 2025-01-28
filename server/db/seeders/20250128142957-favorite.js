'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Favorites',
      [
        {
          filmId: 1431102,
          title: 'Муфаса',
          year: 2024,
          posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1431102.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmId: 4860213,
          title: 'Субстанция',
          year: 2024,
          posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/4860213.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Favorites', null, {});
  },
};
