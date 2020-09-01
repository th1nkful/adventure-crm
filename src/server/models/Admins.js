const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Admins extends Model {}

  Admins.init({
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    emailAddress: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    tableName: 'Admins',
  });

  Admins.associate = ({ Tenants }) => {
    Admins.tenant = Admins.belongsTo(Tenants, { foreignKey: 'tenantId', onDelete: 'cascade' });
    Admins.manages = Admins.hasOne(Tenants, { foreignKey: 'ownerId', as: 'Owner' });
  };

  return Admins;
};
