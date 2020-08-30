const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Admins extends Model {}

  Admins.init({
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    emailAddress: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    tableName: 'Admins',
  });

  return Admins;
};
