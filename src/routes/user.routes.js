import {Router} from 'express'
import * as userCtrol from '../controllers/user.controller'
import { verifyToken, isModerator, isAdmin, checkRolesExisted} from '../middlewares'

const router = Router()

router.post('/', [
    verifyToken,
    isModerator,
    isAdmin,
    checkRolesExisted

], userCtrol.createUser)

export default router 