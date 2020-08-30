const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Events extends Model {}

  Events.init({
    year: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    tableName: 'Events',
  });

  Events.associate = ({
    Competitors, Volunteers, Series, Races,
  }) => {
    Events.races = Events.hasMany(Races, { foreignKey: 'eventId' });
    Events.series = Events.belongsTo(Series, { foreignKey: 'seriesId' });

    Events.competitors = Events.hasMany(Competitors, { foreignKey: 'competitorId' });
    Events.volunteers = Events.hasMany(Volunteers, { foreignKey: 'volunteerId' });
  };

  return Events;
};
