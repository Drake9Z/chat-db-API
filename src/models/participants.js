'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Participants.belongsTo(models.Conversations, {foreignKey: 'conversationId'});
      Participants.belongsTo(models.Users, {foreignKey: 'userId'});
    }
  }
  Participants.init({
    usersId: DataTypes.INTEGER,
    conversationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Participants',
  });
  return Participants;
};