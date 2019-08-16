import contacts from './fixtures';

class Contacts {
  static getAllContacts(req, res) {
    return res.status(200).json({
      data: contacts,
      message: 'Contact fetched successfuly',
      status: 200,
    });
  }
}

export default Contacts;
