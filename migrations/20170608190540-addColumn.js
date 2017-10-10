'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
        'RespuestaA',
        'Jefe',
        {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: 0
        }
        
        );
    queryInterface.addColumn(
        'RespuestaA',
        'Valor',
        {
          type: Sequelize.INTEGER,
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
