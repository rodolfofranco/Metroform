'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
  // MODIFICACIONES PREGUNTA A
    
    queryInterface.changeColumn(
     'Pregunta_As',
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
