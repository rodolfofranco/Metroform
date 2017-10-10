'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   queryInterface.changeColumn(
     'Estudiantes',
     'Correo', 
     {
      type: Sequelize.STRING,
      unique: true,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Estudiantes',
     'Cedula', 
     {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Estudiantes',
     'Carnet', 
     {
      type: Sequelize.BIGINT,
      unique: true,
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
