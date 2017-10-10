'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    // MODIFICACIONES DE USUARIOS //
    
    queryInterface.changeColumn(
     'Usuarios',
     'Correo', 
     {
      type: Sequelize.STRING,
      unique: true,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Usuarios',
     'Password', 
     {
      type: Sequelize.STRING,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Usuarios',
     'Rol', 
     {
      type: Sequelize.STRING,
      allowNull : false
     }
   );   
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface;
  }
};
