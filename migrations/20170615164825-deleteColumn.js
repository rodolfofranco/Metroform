'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   queryInterface.removeColumn(
     
     'Usuarios',
     'scope'
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
