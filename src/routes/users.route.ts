import { Router } from "express";
const router = Router();

//Controladores
import { getUsers, getUser , deleteUser, updateUser, loginUser} from '../controllers/users.controller';


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
    .get(loginUser)


export default router;