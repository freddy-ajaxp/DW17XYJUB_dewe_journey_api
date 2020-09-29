'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Userx extends Model {

    static associate(models) {
      Userx.hasOne(models.Tripx, {
        foreignKey: "userId",
      }),
      Userx.hasOne(models.Bookmarkx, {
        foreignKey: "userId",
      })
    }
  };
  Userx.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Userx',
  });
  return Userx;
};