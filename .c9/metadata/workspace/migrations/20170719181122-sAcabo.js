{"filter":false,"title":"20170719181122-sAcabo.js","tooltip":"/migrations/20170719181122-sAcabo.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":23,"column":0},"action":"remove","lines":["'use strict';","","module.exports = {","  up: function (queryInterface, Sequelize) {","    /*","      Add altering commands here.","      Return a promise to correctly handle asynchronicity.","","      Example:","      return queryInterface.createTable('users', { id: Sequelize.INTEGER });","    */","  },","","  down: function (queryInterface, Sequelize) {","    /*","      Add reverting commands here.","      Return a promise to correctly handle asynchronicity.","","      Example:","      return queryInterface.dropTable('users');","    */","  }","};",""],"id":2},{"start":{"row":0,"column":0},"end":{"row":43,"column":0},"action":"insert","lines":["'use strict';","","module.exports = {","  up: function (queryInterface, Sequelize) {","   queryInterface.changeColumn(","     'Estudiantes',","     'Correo', ","     {","      type: Sequelize.STRING,","      unique: true,","      allowNull : false","     }","   ),","   queryInterface.changeColumn(","     'Estudiantes',","     'Cedula', ","     {","      type: Sequelize.INTEGER,","      unique: true,","      allowNull : false","     }","   ),","   queryInterface.changeColumn(","     'Estudiantes',","     'Carnet', ","     {","      type: Sequelize.BIGINT,","      unique: true,","      allowNull : false","     }","   );","  },","","  down: function (queryInterface, Sequelize) {","    /*","      Add reverting commands here.","      Return a promise to correctly handle asynchronicity.","","      Example:","      return queryInterface.dropTable('users');","    */","  }","};",""]}]]},"ace":{"folds":[],"scrolltop":300,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":43,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1500487893461,"hash":"5b8fd9a19428133d2864a58cfb7faf5adc72bfde"}