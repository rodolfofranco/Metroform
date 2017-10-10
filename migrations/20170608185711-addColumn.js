'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
        'RespuestaB',
        'Valor',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0
        }
        
        );
  
   queryInterface.addColumn(
        'RespuestaB',
        'Inst_Estudiante',
        {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: 0
        }
        
        );
  
  
  }, 
 

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
