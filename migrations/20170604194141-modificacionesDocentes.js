'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   
  // MODIFICACIONES DE DOCENTES
   
   queryInterface.changeColumn(
     'Docentes',
     'Nombre', 
     {
      type: Sequelize.STRING,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Docentes',
     'Correo', 
     {
      type: Sequelize.STRING,
      unique: true,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Docentes',
     'Cedula', 
     {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Docentes',
     'Carnet', 
     {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Docentes',
     'DepartamentoId', 
     {
      type: Sequelize.INTEGER,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Docentes',
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
