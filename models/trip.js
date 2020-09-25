"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    static associate(models) {
      //hasmany tutup sementara ngikutin dumplay
      Trip.hasMany(models.Bookmark, {
        foreignKey: "userId",
      })
      // ,
      // Trip.belongsTo(models.User, {
      //   foreignKey: "userId",
      // });
    }
  }
  Trip.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      content: DataTypes.STRING,
      image: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Trip",
    }
  );
  return Trip;
};
