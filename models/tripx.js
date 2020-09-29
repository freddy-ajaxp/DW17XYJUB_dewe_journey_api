'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tripx extends Model {
    static associate(models) {
      // define association here
      Tripx.belongsTo(models.Userx, {
        foreignKey: "userId",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),
      Tripx.hasOne(models.Bookmarkx, {
        foreignKey: "journeyId",
      })
    }
  };
  Tripx.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tripx',
  });
  return Tripx;
};