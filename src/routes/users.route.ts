import { Router } from "express";
const router = Router();

//Controladores
import { getUsers, getUser , deleteUser, updateUser, loginUser, createUser} from '../controllers/users.controller';


//Todos los usuarios divididos por tipo de usuario  
router.route('/all/:typeUser')
    .get(getUsers)

//Usuario por ID
router.route('/details/:idUser')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser)

//Login
router.route('/login')
    .post(loginUser)


router.route('/create')
    .post(createUser)


export default router;