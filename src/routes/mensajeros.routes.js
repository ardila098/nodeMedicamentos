

import {Router} from "express";

const router = Router()

import * as mensajerosCtrl from '../controllers/mensajeros.controller';
import { authJwt, verifySignup } from "../middlewares";




router.post('/',mensajerosCtrl.createMensajeros);


router.get('/', mensajerosCtrl.getMensajeros);

router.get('/:mensajeroId', mensajerosCtrl.getMensajeroById);

router.put('/:mensajeroId',mensajerosCtrl.updateMensajeroById);

router.delete('/:mensajeroId', mensajerosCtrl.deleteMensajeroById)








export default router;