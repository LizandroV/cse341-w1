import express from 'express';
import controllerContacts from '../controllers/controllerContacts.js'

const route = express.Router();

route.get('/',controllerContacts.getAll);
route.get('/:id',controllerContacts.getOne);
route.post('/',controllerContacts.create);
route.put('/:id',controllerContacts.update);
route.delete('/:id',controllerContacts.delete);


export default route;