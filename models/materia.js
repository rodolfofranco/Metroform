'use strict';
module.exports = function(sequelize, DataTypes) {
  var Materia = sequelize.define('Materia', {
    Nombre: DataTypes.STRING,
    Codigo: DataTypes.STRING
  }, {
    timestamps:false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Materia.hasMany(models.Seccion);
      }
    }
  });
  return Materia;
};