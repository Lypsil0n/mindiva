import express from 'express'
import { createAccount, login, logout } from '../api/accountController.js'

const router = express.Router()

router.post('/create', createAccount)
router.post('/login', login)
router.post('/logout', logout)

export default router