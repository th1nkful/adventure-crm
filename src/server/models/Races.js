const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Races extends Model {}

  Races.init({
    date: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    tableName: 'Races',
  });

  Races.associate = ({
    Events, Legs, Competitors, RaceCategories,
  }) => {
    Races.event = Races.belongsTo(Events, { foreignKey: 'eventId' });
    Races.legs = Races.hasMany(Legs, { foreignKey: 'raceId' });
    Races.competitors = Races.hasMany(Competitors, { foreignKey: 'competitorId' });
    Races.category = Races.belongsTo(RaceCategories, { foreignKey: 'raceCategoryId' });
  };

  return Races;
};
