"use strict";
module.exports = (sequelize, DataTypes) => {
  const SentSms = sequelize.define(
    "SentSms",
    {
      senderId: DataTypes.INTEGER,
      receiverId: DataTypes.INTEGER,
      smsId: DataTypes.INTEGER
    },
    {}
  );
  SentSms.associate = function(models) {
    SentSms.belongsTo(models.Contact, { foreignKey: "senderId" });
    SentSms.belongsTo(models.Contact, { foreignKey: "receiverId" });
    SentSms.belongsTo(models.Sms, { foreignKey: "smsId" });
  };
  return SentSms;
};
