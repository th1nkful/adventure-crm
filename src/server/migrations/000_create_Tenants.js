// using for types
// eslint-disable-next-line no-unused-vars
const sequelize = require('sequelize');

module.exports = {
  up: async (
    /** @type {sequelize.QueryInterface} */
    queryInterface,
  ) => {
    const { DataTypes } = sequelize;
    return queryInterface.createTable('Tenants', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      owner_id: {
        type: DataTypes.INTEGER,
        references: { model: 'Admins', key: 'id' },
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
  ) => queryInterface.dropTable('Tenants'),
};
