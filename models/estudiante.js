'use strict';
module.exports = function(sequelize, DataTypes) {
  var Estudiante = sequelize.define('Estudiante', {
    Nombre: DataTypes.STRING,
    Correo: DataTypes.STRING,
    Cedula: DataTypes.STRING,
    Carnet: DataTypes.STRING
  }, {
    timestamps:false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Estudiante.belongsTo(models.Usuario);
        Estudiante.belongsToMany(models.Seccion,{through: 'SeccionEstudiante'});
      }
    }
  });
  return Estudiante;
};