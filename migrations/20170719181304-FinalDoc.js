'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   queryInterface.changeColumn(
     'Docentes',
     'Carnet', 
     {
      type: Sequelize.BIGINT,
      unique: true,
      allowNull : false
     }
   )
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
