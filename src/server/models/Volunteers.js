const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Volunteers extends Model {}

  Volunteers.init({

  }, {
    sequelize,
    tableName: 'Volunteers',
  });

  return Volunteers;
};
