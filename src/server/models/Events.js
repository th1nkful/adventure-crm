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
    Competitors, Volunteers, Series, Races, Tenants,
  }) => {
    Events.tenant = Events.belongsTo(Tenants, { foreignKey: 'tenantId', onDelete: 'cascade' });
    Events.races = Events.hasMany(Races, { foreignKey: 'eventId' });
    Events.series = Events.belongsTo(Series, { foreignKey: 'seriesId' });
    Events.competitors = Events.hasMany(Competitors, { foreignKey: 'eventId' });
    Events.volunteers = Events.hasMany(Volunteers, { foreignKey: 'eventId' });
  };

  return Events;
};
