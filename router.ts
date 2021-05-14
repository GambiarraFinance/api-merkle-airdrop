import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getUsers, getUser } from './controller.ts'

const router = new Router()
router.get('/users', getUsers)
.get('/user/:address', getUser)

export default router
