'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
  'Estudiantes',
  'Correo',{
    type: Sequelize.STRING,
    alowNull:false,
    unique:true,
    }
  ),
  queryInterface.changeColumn(
  'Estudiantes',
  'Carnet',{
    type: Sequelize.BIGINT,
    alowNull:false,
    unique:true,
    }
  ),queryInterface.changeColumn(
  'Estudiantes',
  'Cedula',{
    type: Sequelize.INTEGER,
    alowNull:false,
    unique:true,
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
