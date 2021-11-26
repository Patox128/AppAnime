const {Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Anime = sequelize.define('Anime', {
    id: {
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emissionDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    countLike: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    coverPage: {
        type: DataTypes.STRING,
    },
    temporadaId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    freezeTableName: true
});

Anime.associate = function(models) {
    Anime.hasMany(models.AnimeList, {
        foreingKey: 'animeId'
    });
    Anime.hasMany(models.GenderListAnime, {
        foreingKey: 'animeId'
    });
    Anime.belongsTo(models.Temporada);

}

module.exports = Anime;