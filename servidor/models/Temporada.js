const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Temporada = sequelize.define('Temporada', {
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

Temporada.associate = function(models) {
    Temporada.hasMany(models.Anime, {
        foreingKey: 'temporadaId'
    });
}

module.exports = Temporada;