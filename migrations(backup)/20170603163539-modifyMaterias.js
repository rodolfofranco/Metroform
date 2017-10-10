'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
     'Materia',
     'Nombre', 
     {
      type: Sequelize.STRING,
      unique: true,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Materia',
     'Codigo', 
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
