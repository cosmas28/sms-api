"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "SentSms",
      [
        {
          smsId: 1,
          senderId: 1,
          receiverId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          smsId: 2,
          senderId: 2,
          receiverId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("SentSms", null, {});
  }
};
