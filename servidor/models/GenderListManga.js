const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const GenderListManga = sequelize.define('GenderListManga', {
    id: {
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    mangaId: {
        type: DataTypes.INTEGER,
    },
    genderMangaId: {
        type: DataTypes.INTEGER,
    }
}, {
    freezeTableName: true
});

GenderListManga.associate = function(models) {
    GenderListManga.belongsTo(models.Manga);
    GenderListManga.belongsTo(models.GenderManga);
}

module.exports = GenderListManga;