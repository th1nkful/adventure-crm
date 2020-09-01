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
    Events, Users, Tenants,
  }) => {
    Volunteers.tenant = Volunteers.belongsTo(Tenants, { foreignKey: 'tenantId', onDelete: 'cascade' });
    Volunteers.event = Volunteers.belongsTo(Events, { foreignKey: 'eventId' });
    Volunteers.user = Volunteers.belongsTo(Users, { foreignKey: 'userId' });
  };

  return Volunteers;
};
