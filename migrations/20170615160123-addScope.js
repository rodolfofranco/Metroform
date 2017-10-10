'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   queryInterface.addColumn(
  'Usuarios',
  'scope',
  {
    type: Sequelize.STRING,
    allowNull: false
  }
);
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'Usuarios',
      'scope'
      );
  }
};
