// import contacts from './fixtures';
const Models = require("../../models");

class Contacts {
  static getAllContacts(req, res) {
    const { Contact } = Models;

    return Contact.findAll()
      .then(contacts =>
        res.status(200).json({
          data: contacts,
          message: "Contact fetched successfuly",
          status: 200
        })
      )
      .catch(error =>
        res.status(400).json({
          error,
          message: "An error occured",
          status: 400
        })
      );
  }
}

export default Contacts;
