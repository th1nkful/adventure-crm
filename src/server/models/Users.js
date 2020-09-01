const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Users extends Model {}

  Users.init({
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.STRING,
    },
    defence: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    emailAddress: {
      type: DataTypes.STRING,
    },
    phoneMobile: {
      type: DataTypes.STRING,
    },
    phoneHome: {
      type: DataTypes.STRING,
    },
    phoneWork: {
      type: DataTypes.STRING,
    },
    allowMarketing: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    sequelize,
    tableName: 'Users',
  });

  Users.associate = ({
    Competitors, Volunteers,
  }) => {
    Users.competing = Users.hasMany(Competitors, { foreignKey: 'userId' });
    Users.volunteering = Users.hasMany(Volunteers, { foreignKey: 'userId' });
  };

  return Users;
};
