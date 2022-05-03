
import {Router } from "express";
const router = Router()


import * as productsCrtl from '../controllers/products.controller'

//importamos los midelwares para la utenticacion de tokens

import {authJwt} from '../middlewares'




router.post('/', productsCrtl.createProducts);

router.get('/', productsCrtl.getProducts);

router.get('/:productId', productsCrtl.getProductById);

router.put('/:productId',productsCrtl.updateProductById);

router.delete('/:productId', productsCrtl.deleteProductById);

export default router;