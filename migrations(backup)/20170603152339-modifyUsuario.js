'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   return queryInterface.changeColumn(
     'Usuarios',
     'Correo', 
     {
      type: Sequelize.STRING,
      unique: true,
      allowNull : false
     }
   );
   
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface;
  }
};
