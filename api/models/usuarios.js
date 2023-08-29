'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    nomeUsuario: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, { 
      defaultScope:{
        attributes:{
          exclude: ['senha']
        }
      }});
  Usuarios.associate = function(models) {
    // associations can be defined here
  };
  return Usuarios;
};