"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Contacts",
      [
        {
          userName: "username0",
          firstName: "John",
          lastName: "Doe",
          phoneNumber: "+255766156833",
          isDeleted: false,
          isBlocked: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: "admin",
          firstName: "John",
          lastName: "Doe",
          phoneNumber: "+255766156833",
          isDeleted: false,
          isBlocked: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Contacts", null, {});
  }
};
