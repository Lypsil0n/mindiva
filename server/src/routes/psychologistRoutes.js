import express, { application } from 'express'
import { getAllPsychologists } from '../api/psychologistController.js'

const router = express.Router()

router.get('/', getAllPsychologists)

export default router