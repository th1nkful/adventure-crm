const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class RaceCategories extends Model {}

  RaceCategories.init({
    name: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    tableName: 'RaceCategories',
  });

  RaceCategories.associate = ({
    Races, Competitors, Tenants,
  }) => {
    RaceCategories.tenant = RaceCategories.belongsTo(Tenants, { foreignKey: 'tenantId', onDelete: 'cascade' });
    RaceCategories.races = RaceCategories.hasMany(Races, { foreignKey: 'raceCategoryId' });
  };

  return RaceCategories;
};
