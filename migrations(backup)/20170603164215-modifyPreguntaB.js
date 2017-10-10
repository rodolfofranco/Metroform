'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
     'Pregunta_Bs',
     'Enunciado', 
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
