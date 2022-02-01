import { Router } from 'express';
import * as Panel from "../controllers/product.controller";
import { verifyToken, isModerator, isAdmin } from '../middlewares'

//Init
const router = Router();

//Routes

router.get('/products', Panel.getProducts)

router.get('/product/:id', Panel.getProduct)

router.post('/create',[verifyToken, isModerator],  Panel.create )

router.delete('/delete/:id', [verifyToken, isAdmin],  Panel.deleteProduct )

router.put('/product/:id', [verifyToken, isModerator], Panel.updateProduct)


export default router;
