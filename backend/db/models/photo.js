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
    Photo.belongsTo(models.User, {foreignKey: 'userId'});
    Photo.belongsTo(models.Album, {foreignKey: 'albumId'});
    // Photo.belongsToMany(models.Tag, { foreignKey: 'photoId' });
  };
  return Photo;
};