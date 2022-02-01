//Definicion de las url
import * as Ctrol from "../controllers/sendEmail.controller";
import { Router } from 'express';

//Init
const router = Router();

//Routes
router.post('/email', Ctrol.sendEmail)

export default router;