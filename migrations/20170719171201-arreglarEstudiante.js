'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
  'Estudiantes',
  'Correo',{
    type: Sequelize.STRING,
    alowNull:false
    }
  ),
  queryInterface.addColumn(
  'Estudiantes',
  'Carnet',{
    type: Sequelize.INTEGER,
    alowNull:false
    }
  ),queryInterface.addColumn(
  'Estudiantes',
  'Cedula',{
    type: Sequelize.INTEGER,
    alowNull:false
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
