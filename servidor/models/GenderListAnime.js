const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const GenderListAnime = sequelize.define('GenderListAnime', {
    id: {
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    
    animeId: {
        type: DataTypes.INTEGER,
    },
    genderAnimeId: {
        type: DataTypes.INTEGER,
    }
}, {
    freezeTableName: true
});

GenderListAnime.associate = function(models) {
    GenderListAnime.belongsTo(models.Anime);
    GenderListAnime.belongsTo(models.GenderAnime);
}


module.exports = GenderListAnime;