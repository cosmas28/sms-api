module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define(
    "Contact",
    {
      userName: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phoneNumber: DataTypes.INTEGER,
      isDeleted: DataTypes.BOOLEAN,
      isBlocked: DataTypes.BOOLEAN
    },
    {}
  );
  Contact.associate = models => {
    Contact.belongsToMany(models.Sms, {
      through: "SentSms",
      foreignKey: "senderId",
      as: "senders"
    });
    Contact.belongsToMany(models.Sms, {
      through: "SentSms",
      foreignKey: "receiverId",
      as: "receivers"
    });
  };
  return Contact;
};
