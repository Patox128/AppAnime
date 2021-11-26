const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const AnimeList = sequelize.define('AnimeList', {
    id: {
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    animeId: {
        type: DataTypes.INTEGER,
    },
    userId: {
        type: DataTypes.INTEGER,
    }
}, {
    freezeTableName: true
});

AnimeList.associate = function(models) {
    AnimeList.belongsTo(models.Anime);
    AnimeList.belongsTo(models.User);
}

module.exports = AnimeList;