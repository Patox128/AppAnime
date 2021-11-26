const {Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Manga = sequelize.define('Manga', {
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
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true
});

Manga.associate = function(models) {
    Manga.hasMany(models.MangaList, {
        foreingKey: 'mangaId'
    });
    
    Manga.hasMany(models.GenderListManga, {
        foreingKey: 'mangaId'
    });
}

module.exports = Manga;