const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Legs extends Model {}

  Legs.init({
    type: {
      type: DataTypes.STRING,
    },
    distance: {
      type: DataTypes.STRING,
    },
    unit: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    tableName: 'Legs',
  });

  Legs.associate = ({
    Races, Competitors, Tenants,
  }) => {
    Legs.tenant = Legs.belongsTo(Tenants, { foreignKey: 'tenantId', onDelete: 'cascade' });
    Legs.race = Legs.belongsTo(Races, { foreignKey: 'raceId' });
    Legs.competitors = Legs.hasMany(Competitors, { foreignKey: 'legId' });
  };

  return Legs;
};
