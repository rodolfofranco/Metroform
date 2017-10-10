'use strict';
module.exports = function(sequelize, DataTypes) {
  var Usuario = sequelize.define('Usuario', {
    Correo: DataTypes.STRING,
    Password: DataTypes.STRING,
    scope: DataTypes.STRING
  }, {
    timestamps:false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Usuario;
};