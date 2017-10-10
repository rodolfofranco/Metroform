'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
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
