import {Router} from 'express'
import * as authCrol from '../controllers/auth.controller'
import {checkDuplicateUsernameOrEmail, checkRolesExisted} from '../middlewares'

const router = Router()


router.post('/SignIn', authCrol.signIn)

router.post(
    '/SignUp',
     [ checkDuplicateUsernameOrEmail, checkRolesExisted ],
      authCrol.singUp
)

export default router 