import { verifyToken, isModerator, isAdmin } from './authJwt'
import { checkRolesExisted, checkDuplicateUsernameOrEmail } from './verifySignup'

// Exporta un obj que imp una propiedad
export { verifyToken, isModerator, isAdmin, checkRolesExisted, checkDuplicateUsernameOrEmail }