import { Router } from "express";
const router = Router();

//Controladores
import { indexWelcome } from '../controllers/index.controller';


//Rutas
router.route('/')
    .get(indexWelcome)




export default router;