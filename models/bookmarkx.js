'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmarkx extends Model {
    static associate(models) {
      Bookmarkx.belongsTo(models.Tripx, {
        foreignKey: "journeyId",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),
      Bookmarkx.belongsTo(models.Userx, {
        foreignKey: "userId",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  Bookmarkx.init({
    journeyId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bookmarkx',
  });
  return Bookmarkx;
};