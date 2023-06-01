import { Router } from "express";
const router = Router();

//Controladores
import { getContacts, getContact, updateContact,deleteContact , createContact,getContactsByUser} from '../controllers/contacts.controller';

//Todos los usuarios divididos por tipo de usuario
router.route('/all/:typeUser')
    .get(getContacts)

router.route('/allByUser/:idUser')
    .get(getContactsByUser)

//Contacto por ID
router.route('/contact/:idContact')
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact)

router.route('/create')
    .post(createContact)



export default router;