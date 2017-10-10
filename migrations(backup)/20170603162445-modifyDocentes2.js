'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
     'Docentes',
     'DepartamentoId', 
     {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull : false
     }
   ),
   queryInterface.changeColumn(
     'Docentes',
     'UsuarioId', 
     {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false
     }
   );
   
   
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface;
  }
};
