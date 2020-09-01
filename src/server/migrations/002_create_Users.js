// using for types
// eslint-disable-next-line no-unused-vars
const sequelize = require('sequelize');

module.exports = {
  up: async (
    /** @type {sequelize.QueryInterface} */
    queryInterface,
  ) => {
    const { DataTypes } = sequelize;
    return queryInterface.createTable('Users', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      date_of_birth: {
        type: DataTypes.DATE,
      },
      gender: {
        type: DataTypes.STRING,
      },
      defence: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      email_address: {
        type: DataTypes.STRING,
      },
      phone_mobile: {
        type: DataTypes.STRING,
      },
      phone_home: {
        type: DataTypes.STRING,
      },
      phone_work: {
        type: DataTypes.STRING,
      },
      allow_marketing: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      tenant_id: {
        type: DataTypes.INTEGER,
        references: { model: 'Tenants', key: 'id' },
        onDelete: 'CASCADE',
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  },
  down: async (
    /** @type {sequelize.QueryInterface} */
    queryInterface,
  ) => queryInterface.dropTable('Users'),
};
