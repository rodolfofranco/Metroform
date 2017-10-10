'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

  // MODIFICACIONES DE DEPARTAMENTOS //
  
   queryInterface.changeColumn(
     'Departamentos',
     'Nombre', 
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
