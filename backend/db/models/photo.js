'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    photo: DataTypes.STRING,
    albumId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
  };
  return Photo;
};