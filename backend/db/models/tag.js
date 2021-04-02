'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    photoId: DataTypes.INTEGER,
    tagName: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.belongsTo(models.Photo, { foreignKey: 'photoId'})
  };
  return Tag;
};