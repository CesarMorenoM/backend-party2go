import {Router} from 'express'
import {adduser, getUsers} from '../controllers/user'
const router = Router()

router.post('/',adduser);
router.get('/',getUsers)
export default router