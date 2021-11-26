const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const MangaList = sequelize.define('MangaList', {
    id: {
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    mangaId: {
        type: DataTypes.INTEGER,
    },
    userId: {
        type: DataTypes.INTEGER,
    }
}, {
    freezeTableName: true
});

MangaList.associate = function(models) {
    MangaList.belongsTo(models.Manga);
    MangaList.belongsTo(models.User);
}

module.exports = MangaList;