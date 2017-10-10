'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   
  // MODIFICACIONES DE DOCENTES
   
   
   queryInterface.changeColumn(
     'Estudiantes',
     'Correo', 
     {
      type: Sequelize.STRING,
      unique: false,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Estudiantes',
     'Cedula', 
     {
      type: Sequelize.INTEGER,
      unique: false,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Estudiantes',
     'Carnet', 
     {
      type: Sequelize.INTEGER,
      unique: false,
      allowNull : false
     }
   );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface;
  }
};
