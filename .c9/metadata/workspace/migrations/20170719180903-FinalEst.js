{"filter":false,"title":"20170719180903-FinalEst.js","tooltip":"/migrations/20170719180903-FinalEst.js","undoManager":{"mark":1,"position":1,"stack":[[{"start":{"row":4,"column":3},"end":{"row":10,"column":6},"action":"remove","lines":[" /*","      Add altering commands here.","      Return a promise to correctly handle asynchronicity.","","      Example:","      return queryInterface.createTable('users', { id: Sequelize.INTEGER });","    */"],"id":2,"ignore":true}],[{"start":{"row":4,"column":3},"end":{"row":27,"column":5},"action":"insert","lines":["queryInterface.addColumn(","     'Estudiantes',","     'Correo', ","     {","      type: Sequelize.STRING,","      allowNull : false","     }","   ),","   queryInterface.addColumn(","     'Estudiantes',","     'Cedula', ","     {","      type: Sequelize.INTEGER,","      allowNull : false","     }","   ),","   queryInterface.addColumn(","     'Estudiantes',","     'Carnet', ","     {","      type: Sequelize.BIGINT,","      allowNull : false","     }","   );"],"id":3,"ignore":true}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":40,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":1,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1500487778908,"hash":"8c1663bb62e93f5a5e663e5a839f723a9080b474"}