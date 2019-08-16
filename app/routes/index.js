import { Router } from 'express';
import Contacts from '../controllers/contacts/index';

const routes = Router();

routes.get('/contacts', Contacts.getAllContacts);

export default routes;
