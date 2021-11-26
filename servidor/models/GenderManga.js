const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const GenderManga = sequelize.define('GenderManga', {
    id: {
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

GenderManga.associate = function(models) {
    GenderManga.hasMany(models.GenderListManga, {
        foreingKey: 'genderMangaId'
    });
}

module.exports = GenderManga;