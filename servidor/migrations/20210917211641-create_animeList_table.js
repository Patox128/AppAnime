'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('AnimeList', {
      id: {
        type: Sequelize.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      animeId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Anime',
            key:'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
      },
      userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'User',
            key:'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async queryInterface => {
    return queryInterface.dropTable('AnimeList');
  },
};
