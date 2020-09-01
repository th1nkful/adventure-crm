const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Tenants extends Model {}

  Tenants.init({
    name: {
      type: DataTypes.STRING,
    },
    // logo: {
    //   type: DataTypes.STRING,
    // },
  }, {
    sequelize,
    tableName: 'Tenants',
  });

  Tenants.associate = ({
    Admins,
    Series,
    Events,
    Races,
    Legs,
    Users,
    RaceCategories,
    Competitors,
    Volunteers,
  }) => {
    Tenants.admins = Tenants.hasMany(Admins, { foreignKey: 'tenantId', onDelete: 'cascade' });
    Tenants.users = Tenants.hasMany(Users, { foreignKey: 'tenantId', onDelete: 'cascade' });
    Tenants.series = Tenants.hasMany(Series, { foreignKey: 'tenantId', onDelete: 'cascade' });
    Tenants.events = Tenants.hasMany(Events, { foreignKey: 'tenantId', onDelete: 'cascade' });
    Tenants.races = Tenants.hasMany(Races, { foreignKey: 'tenantId', onDelete: 'cascade' });
    Tenants.legs = Tenants.hasMany(Legs, { foreignKey: 'tenantId', onDelete: 'cascade' });
    Tenants.categories = Tenants.hasMany(RaceCategories, { foreignKey: 'tenantId', onDelete: 'cascade' });
    Tenants.competitors = Tenants.hasMany(Competitors, { foreignKey: 'tenantId', onDelete: 'cascade' });
    Tenants.volunteers = Tenants.hasMany(Volunteers, { foreignKey: 'tenantId', onDelete: 'cascade' });

    Tenants.owner = Tenants.belongsTo(Admins, { foreignKey: 'ownerId', as: 'Owner' });
  };

  return Tenants;
};
