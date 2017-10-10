'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   queryInterface.changeColumn(
  'SeccionEstudiante',
  'Retiro',
  {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  }
),
    queryInterface.changeColumn(
  'SeccionEstudiante',
  'Evaluo',
  {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  }
);

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
