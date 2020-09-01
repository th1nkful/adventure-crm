// using for types
// eslint-disable-next-line no-unused-vars
const sequelize = require('sequelize');

module.exports = {
  up: async (
    /** @type {sequelize.QueryInterface} */
    queryInterface,
  ) => {
    const { DataTypes } = sequelize;
    return queryInterface.createTable('Tables', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
      },
      event_id: {
        type: DataTypes.INTEGER,
        references: { model: 'Events', key: 'id' },
      },
      race_category_id: {
        type: DataTypes.INTEGER,
        references: { model: 'RaceCategories', key: 'id' },
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
  ) => queryInterface.dropTable('Tables'),
};
