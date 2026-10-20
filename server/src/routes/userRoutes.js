import express from 'express'
import { insertUserData } from '../api/userController.js'

const router = express.Router()

router.post('/insert', insertUserData)

export default router