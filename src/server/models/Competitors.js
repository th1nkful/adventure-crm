const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Competitors extends Model {}

  Competitors.init({
    time: {
      type: DataTypes.STRING,
    },
    didNotFinish: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    tableName: 'Competitors',
  });

  Competitors.associate = ({
    Users, Races, Legs, Events, Tenants,
  }) => {
    Competitors.tenant = Competitors.belongsTo(Tenants, { foreignKey: 'tenantId', onDelete: 'cascade' });
    Competitors.user = Competitors.belongsTo(Users, { foreignKey: 'userId' });
    Competitors.race = Competitors.belongsTo(Races, { foreignKey: 'raceId' });
    Competitors.leg = Competitors.belongsTo(Legs, { foreignKey: 'legId' });
    Competitors.event = Competitors.belongsTo(Events, { foreignKey: 'eventId' });
  };

  return Competitors;
};
