'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
  // MODIFICACIONES SECCIONES
    
    queryInterface.changeColumn(
     'Seccions',
     'Modalidad', 
     {
      type: Sequelize.STRING,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Seccions',
     'Capacidad', 
     {
      type: Sequelize.INTEGER,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Seccions',
     'Num_Seccion', 
     {
      type: Sequelize.INTEGER,
      allowNull : false
     }
   );   
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface;
  }
};
