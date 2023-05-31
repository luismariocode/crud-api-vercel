import { Router } from "express";
const router = Router();

//Controladores
import { getContacts, getContact } from '../controllers/contacts.controller';

//Todos los usuarios divididos por tipo de usuario
router.route('/all/:typeUser')
    .get(getContacts)

//Contacto por ID
router.route('/contact/:idContact')
    .get(getContact)



export default router;