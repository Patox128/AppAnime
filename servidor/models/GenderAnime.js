const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const GenderAnime = sequelize.define('GenderAnime', {
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

GenderAnime.associate = function(models) {
    GenderAnime.hasMany(models.GenderListAnime, {
        foreingKey: 'genderAnimeId'
    });
}


module.exports = GenderAnime;