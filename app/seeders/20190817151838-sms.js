"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Sms",
      [
        {
          message: "hello cosmas",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          message: "Im fine thank, and you?",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Sms", null, {});
  }
};
