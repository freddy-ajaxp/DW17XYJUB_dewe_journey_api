'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bookmarkxes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      journeyId: {
        allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'Tripxes',
					key: 'id'
				},
				onUpdate: 'CASCADE',
        onDelete: 'CASCADE'              },
      userId: {
        allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'Userxes',
					key: 'id'
				},
				onUpdate: 'CASCADE',
        onDelete: 'CASCADE'      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bookmarkxes');
  }
};