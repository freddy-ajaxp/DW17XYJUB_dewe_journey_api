"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    static associate(models) {
      Bookmark.belongsTo(models.Trip, {
        foreignKey: "journeyId",
      })
    }
  }
  Bookmark.init(
    {
      journeyId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER    
    },
    {
      sequelize,
      modelName: "Bookmark",
    }
  );
  return Bookmark;
};
