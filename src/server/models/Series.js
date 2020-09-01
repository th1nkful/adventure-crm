const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Series extends Model {}

  Series.init({
    name: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    tableName: 'Series',
  });

  Series.associate = ({
    Events, Tenants,
  }) => {
    Series.tenant = Series.belongsTo(Tenants, { foreignKey: 'tenantId', onDelete: 'cascade' });
    Series.events = Series.hasMany(Events, { foreignKey: 'seriesId' });
  };

  return Series;
};
