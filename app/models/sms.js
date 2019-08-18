"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sms = sequelize.define(
    "Sms",
    {
      message: DataTypes.TEXT,
      status: DataTypes.BOOLEAN
    },
    {}
  );
  Sms.associate = function(models) {
    Sms.belongsToMany(models.Contact, {
      through: "SentSms",
      foreignKey: "smsId",
      as: "messages"
    });
  };
  return Sms;
};
