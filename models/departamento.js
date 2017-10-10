'use strict';
module.exports = function(sequelize, DataTypes) {
  var Departamento = sequelize.define('Departamento', {
    Nombre: DataTypes.STRING
  }, {
    timestamps:false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Departamento.hasMany(models.Docente);
        Departamento.hasMany(models.Materia);
      }
    }
  });
  return Departamento;
};