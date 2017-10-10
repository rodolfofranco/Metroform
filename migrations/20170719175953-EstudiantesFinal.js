'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   
  // MODIFICACIONES ESTUDIANTES
   
   queryInterface.addColumn(
     'Estudiantes',
     'Correo', 
     {
      type: Sequelize.STRING,
      unique: true,
      allowNull : false
     }
   ),
   queryInterface.addColumn(
     'Estudiantes',
     'Cedula', 
     {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull : false
     }
   ),
   queryInterface.addColumn(
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
    return queryInterface;
  }
};
