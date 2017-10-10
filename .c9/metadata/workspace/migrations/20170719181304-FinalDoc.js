{"filter":false,"title":"20170719181304-FinalDoc.js","tooltip":"/migrations/20170719181304-FinalDoc.js","undoManager":{"mark":13,"position":13,"stack":[[{"start":{"row":0,"column":0},"end":{"row":23,"column":0},"action":"remove","lines":["'use strict';","","module.exports = {","  up: function (queryInterface, Sequelize) {","    /*","      Add altering commands here.","      Return a promise to correctly handle asynchronicity.","","      Example:","      return queryInterface.createTable('users', { id: Sequelize.INTEGER });","    */","  },","","  down: function (queryInterface, Sequelize) {","    /*","      Add reverting commands here.","      Return a promise to correctly handle asynchronicity.","","      Example:","      return queryInterface.dropTable('users');","    */","  }","};",""],"id":2},{"start":{"row":0,"column":0},"end":{"row":43,"column":0},"action":"insert","lines":["'use strict';","","module.exports = {","  up: function (queryInterface, Sequelize) {","   queryInterface.changeColumn(","     'Estudiantes',","     'Correo', ","     {","      type: Sequelize.STRING,","      unique: true,","      allowNull : false","     }","   ),","   queryInterface.changeColumn(","     'Estudiantes',","     'Cedula', ","     {","      type: Sequelize.INTEGER,","      unique: true,","      allowNull : false","     }","   ),","   queryInterface.changeColumn(","     'Estudiantes',","     'Carnet', ","     {","      type: Sequelize.BIGINT,","      unique: true,","      allowNull : false","     }","   );","  },","","  down: function (queryInterface, Sequelize) {","    /*","      Add reverting commands here.","      Return a promise to correctly handle asynchronicity.","","      Example:","      return queryInterface.dropTable('users');","    */","  }","};",""]}],[{"start":{"row":5,"column":6},"end":{"row":5,"column":17},"action":"remove","lines":["Estudiantes"],"id":3},{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"insert","lines":["D"]}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["o"],"id":4}],[{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["c"],"id":5}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["e"],"id":6}],[{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["n"],"id":7}],[{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"insert","lines":["t"],"id":8}],[{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":["e"],"id":9}],[{"start":{"row":5,"column":13},"end":{"row":5,"column":14},"action":"insert","lines":["s"],"id":10}],[{"start":{"row":12,"column":4},"end":{"row":30,"column":5},"action":"remove","lines":[",","   queryInterface.changeColumn(","     'Estudiantes',","     'Cedula', ","     {","      type: Sequelize.INTEGER,","      unique: true,","      allowNull : false","     }","   ),","   queryInterface.changeColumn(","     'Estudiantes',","     'Carnet', ","     {","      type: Sequelize.BIGINT,","      unique: true,","      allowNull : false","     }","   );"],"id":11,"ignore":true}],[{"start":{"row":6,"column":6},"end":{"row":6,"column":12},"action":"remove","lines":["Correo"],"id":12,"ignore":true},{"start":{"row":6,"column":6},"end":{"row":6,"column":9},"action":"insert","lines":["Car"]}],[{"start":{"row":6,"column":9},"end":{"row":6,"column":12},"action":"insert","lines":["net"],"id":13,"ignore":true}],[{"start":{"row":8,"column":22},"end":{"row":8,"column":28},"action":"remove","lines":["STRING"],"id":14,"ignore":true},{"start":{"row":8,"column":22},"end":{"row":8,"column":25},"action":"insert","lines":["BIG"]}],[{"start":{"row":8,"column":25},"end":{"row":8,"column":28},"action":"insert","lines":["INT"],"id":15,"ignore":true}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":4},"end":{"row":12,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1500487996268,"hash":"bfd0ff7ce67a893cd191807a09b88b6748ca7d6a"}