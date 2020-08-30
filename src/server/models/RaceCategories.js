const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class RaceCategories extends Model {}

  RaceCategories.init({
    date: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    tableName: 'RaceCategories',
  });

  RaceCategories.associate = ({
    Races, Competitors,
  }) => {
    RaceCategories.races = RaceCategories.hasMany(Races, { foreignKey: 'raceCategoryId' });
    RaceCategories.competitors = RaceCategories.hasMany(Competitors, { foreignKey: 'raceCategoryId' });
  };

  return RaceCategories;
};
