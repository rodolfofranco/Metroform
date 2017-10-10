'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   
  // MODIFICACIONES ESTUDIANTES
   
    queryInterface.changeColumn(
     'Estudiantes',
     'Nombre', 
     {
      type: Sequelize.STRING,
      allowNull : false
     }
   ),
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
      type: Sequelize.INTEGER,
      unique: true,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Estudiantes',
     'UsuarioId', 
     {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull : false
     }
   );  
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface;
  }
};
