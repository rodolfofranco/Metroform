'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pregunta_A = sequelize.define('Pregunta_A', {
    Enunciado: DataTypes.STRING
  }, {
    timestamps:false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Pregunta_A.belongsToMany(models.Docente,{through: 'RespuestaA'});
      }
    }
  });
  return Pregunta_A;
};