'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   queryInterface.addColumn(
     'Estudiantes',
     'Correo', 
     {
      type: Sequelize.STRING,
      allowNull : false
     }
   ),
   queryInterface.addColumn(
     'Estudiantes',
     'Cedula', 
     {
      type: Sequelize.INTEGER,
      allowNull : false
     }
   ),
   queryInterface.addColumn(
     'Estudiantes',
     'Carnet', 
     {
      type: Sequelize.BIGINT,
      allowNull : false
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
