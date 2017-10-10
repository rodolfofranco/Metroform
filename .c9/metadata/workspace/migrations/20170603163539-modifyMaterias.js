{"filter":false,"title":"20170603163539-modifyMaterias.js","tooltip":"/migrations/20170603163539-modifyMaterias.js","undoManager":{"mark":23,"position":23,"stack":[[{"start":{"row":0,"column":0},"end":{"row":23,"column":0},"action":"remove","lines":["'use strict';","","module.exports = {","  up: function (queryInterface, Sequelize) {","    /*","      Add altering commands here.","      Return a promise to correctly handle asynchronicity.","","      Example:","      return queryInterface.createTable('users', { id: Sequelize.INTEGER });","    */","  },","","  down: function (queryInterface, Sequelize) {","    /*","      Add reverting commands here.","      Return a promise to correctly handle asynchronicity.","","      Example:","      return queryInterface.dropTable('users');","    */","  }","};",""],"id":3},{"start":{"row":0,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["'use strict';","","module.exports = {","  up: function (queryInterface, Sequelize) {","   return queryInterface.changeColumn(","     'Usuarios',","     'Correo', ","     {","      type: Sequelize.STRING,","      unique: true,","      allowNull : false","     }","   );","   ","  },","","  down: function (queryInterface, Sequelize) {","    return queryInterface;","  }","};",""]}],[{"start":{"row":0,"column":0},"end":{"row":20,"column":0},"action":"remove","lines":["'use strict';","","module.exports = {","  up: function (queryInterface, Sequelize) {","   return queryInterface.changeColumn(","     'Usuarios',","     'Correo', ","     {","      type: Sequelize.STRING,","      unique: true,","      allowNull : false","     }","   );","   ","  },","","  down: function (queryInterface, Sequelize) {","    return queryInterface;","  }","};",""],"id":4},{"start":{"row":0,"column":0},"end":{"row":56,"column":0},"action":"insert","lines":["'use strict';","","module.exports = {","  up: function (queryInterface, Sequelize) {","    queryInterface.changeColumn(","     'Estudiantes',","     'Correo', ","     {","      type: Sequelize.STRING,","      unique: true,","      allowNull : false","     }","   ),","   queryInterface.changeColumn(","     'Estudiantes',","     'Nombre', ","     {","      type: Sequelize.STRING,","      allowNull : false","     }","   ),","   queryInterface.changeColumn(","     'Estudiantes',","     'Cedula', ","     {","      type: Sequelize.STRING,","      unique: true,","      allowNull : false","     }","   ),","   queryInterface.changeColumn(","     'Estudiantes',","     'UsuarioId', ","     {","      type: Sequelize.INTEGER,","      unique: true,","      allowNull : false","     }","   ),","   queryInterface.changeColumn(","     'Estudiantes',","     'Carnet', ","     {","      type: Sequelize.STRING,","      unique: true,","      allowNull : false","     }","   );","   ","   ","  },","","  down: function (queryInterface, Sequelize) {","    return queryInterface;","  }","};",""]}],[{"start":{"row":6,"column":6},"end":{"row":6,"column":12},"action":"remove","lines":["Correo"],"id":5},{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":["N"]}],[{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":["o"],"id":6}],[{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["m"],"id":7}],[{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["b"],"id":8}],[{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["r"],"id":9}],[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["e"],"id":10}],[{"start":{"row":15,"column":6},"end":{"row":15,"column":12},"action":"remove","lines":["Nombre"],"id":11},{"start":{"row":15,"column":6},"end":{"row":15,"column":7},"action":"insert","lines":["C"]}],[{"start":{"row":15,"column":7},"end":{"row":15,"column":8},"action":"insert","lines":["o"],"id":12}],[{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"insert","lines":["d"],"id":13}],[{"start":{"row":15,"column":9},"end":{"row":15,"column":10},"action":"insert","lines":["i"],"id":14}],[{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"insert","lines":["g"],"id":15}],[{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"insert","lines":["o"],"id":16}],[{"start":{"row":14,"column":6},"end":{"row":14,"column":17},"action":"remove","lines":["Estudiantes"],"id":17},{"start":{"row":14,"column":6},"end":{"row":14,"column":7},"action":"insert","lines":["M"]},{"start":{"row":5,"column":6},"end":{"row":5,"column":17},"action":"remove","lines":["Estudiantes"]},{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"insert","lines":["M"]}],[{"start":{"row":14,"column":7},"end":{"row":14,"column":8},"action":"insert","lines":["a"],"id":18},{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["a"]}],[{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"insert","lines":["t"],"id":19},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["t"]}],[{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"insert","lines":["e"],"id":20},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":["r"],"id":21},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["r"]}],[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["i"],"id":22},{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"insert","lines":["i"]}],[{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"insert","lines":["a"],"id":23},{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":["a"]}],[{"start":{"row":20,"column":5},"end":{"row":47,"column":5},"action":"remove","lines":["","   queryInterface.changeColumn(","     'Estudiantes',","     'Cedula', ","     {","      type: Sequelize.STRING,","      unique: true,","      allowNull : false","     }","   ),","   queryInterface.changeColumn(","     'Estudiantes',","     'UsuarioId', ","     {","      type: Sequelize.INTEGER,","      unique: true,","      allowNull : false","     }","   ),","   queryInterface.changeColumn(","     'Estudiantes',","     'Carnet', ","     {","      type: Sequelize.STRING,","      unique: true,","      allowNull : false","     }","   );"],"id":24}],[{"start":{"row":20,"column":4},"end":{"row":20,"column":5},"action":"remove","lines":[","],"id":25}],[{"start":{"row":20,"column":4},"end":{"row":20,"column":5},"action":"insert","lines":[";"],"id":26}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":29,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1496507794492,"hash":"7c0a044cbdab1698f2f9228dd99e811a846584ac"}