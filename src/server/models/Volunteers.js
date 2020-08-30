const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Volunteers extends Model {}

  Volunteers.init({
    time: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    tableName: 'Volunteers',
  });

  Volunteers.associate = ({
    Events,
  }) => {
    Volunteers.event = Volunteers.belongsTo(Events, { foreignKey: 'eventId' });
  };

  return Volunteers;
};
