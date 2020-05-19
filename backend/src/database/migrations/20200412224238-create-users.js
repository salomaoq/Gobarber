'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allwNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allwNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allwNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allwNull: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allwNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allwNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allwNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  },
};
