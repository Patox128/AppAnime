'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Anime', {
      id: {
        type: Sequelize.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      status: {
          type: Sequelize.STRING,
          allowNull: false
      },
      emissionDate: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      endDate: {
          type: Sequelize.DATEONLY
      },
      type: {
          type: Sequelize.STRING,
          allowNull: false
      },
      description: {
          type: Sequelize.STRING,
          allowNull: false
      },
      countLike: {
          type: Sequelize.INTEGER,
          defaultValue: 0
      },
      coverPage: {
          type: Sequelize.STRING
      },
      temporadaId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Temporada',
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
    return queryInterface.dropTable('Anime');
  },
};