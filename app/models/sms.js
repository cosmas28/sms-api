export default (sequelize, DataTypes) => {
  const Sms = sequelize.define(
    "Sms",
    {
      message: DataTypes.TEXT,
      status: DataTypes.BOOLEAN
    },
    {}
  );
  Sms.associate = models => {
    Sms.belongsToMany(models.Contact, {
      through: "SentSms",
      foreignKey: "smsId",
      as: "messages"
    });
  };
  return Sms;
};
