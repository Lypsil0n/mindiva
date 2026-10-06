import express from 'express'
import { createAccount, login } from '../api/accountController.js'

const router = express.Router()

router.post('/create', createAccount)
router.post('/login', login)

export default router