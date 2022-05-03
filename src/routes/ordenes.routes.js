

import {Router } from "express";
const router = Router()


import * as ordenesCrtl from '../controllers/ordenes.controller'



import {authJwt} from '../middlewares'




//puedo poner el verifytoken desde el authJwt si quiero que la orden se cree solo con el rol admin 

router.post('/', ordenesCrtl.createOrdenes);


router.get('/', ordenesCrtl.getOrdenes);

router.get('/:ordenId', ordenesCrtl.getOrdenesById);

router.put('/:ordenId',ordenesCrtl.updateOrdenById);

router.delete('/:ordenId', ordenesCrtl.deleteOrdenById);

export default router;