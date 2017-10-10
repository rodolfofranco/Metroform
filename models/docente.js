'use strict';
module.exports = function(sequelize, DataTypes) {
  var Docente = sequelize.define('Docente', {
    Nombre: DataTypes.STRING,
    Correo: DataTypes.STRING,
    Cedula: DataTypes.STRING,
    Carnet: DataTypes.STRING
  }, {
    timestamps:false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Docente.belongsTo(models.Usuario);
        Docente.hasMany(models.Seccion);
        Docente.belongsToMany(models.Pregunta_A,{through: 'RespuestaA'});
      }
    }
  });
  return Docente;
};