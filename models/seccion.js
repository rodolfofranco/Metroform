'use strict';
module.exports = function(sequelize, DataTypes) {
  var Seccion = sequelize.define('Seccion', {
    Modalidad: DataTypes.STRING,
    Capacidad: DataTypes.INTEGER,
    Num_seccion: DataTypes.INTEGER
  }, {
    timestamps:false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Seccion.belongsToMany(models.Estudiante,{through: 'SeccionEstudiante'});
        Seccion.belongsToMany(models.Pregunta_B,{through: 'RespuestaB'});
      }
    }
  });
  return Seccion;
};