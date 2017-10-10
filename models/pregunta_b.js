'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pregunta_B = sequelize.define('Pregunta_B', {
    Enunciado: DataTypes.STRING
  }, {
    timestamps:false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Pregunta_B.belongsToMany(models.Seccion,{through: 'RespuestaB'});
      }
    }
  });
  return Pregunta_B;
};