'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Participants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: { 
          model: "Users",
          key: "id",
        }
      },
      conversationId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: { 
          model: "Conversations",
          key: "id",
        }
      },
    },
    {
      timestamps:false
    }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Participants');
  }
};