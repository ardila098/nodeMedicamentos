
import { Router } from "express";
const router = Router()
import { verifySignup } from "../middlewares";



require('../controllers/auth.controller')

import * as authCtrl from '../controllers/auth.controller';
import passport from "passport";

router.post('/signup',verifySignup.checkDuplicateUsernameOrEmail,verifySignup.checkRolesExisted, authCtrl.signup,(req, res)=>{res.render('signup')})
router.post('/signin', authCtrl.signin, (req, res) => { res.render('signin') })






export default router;