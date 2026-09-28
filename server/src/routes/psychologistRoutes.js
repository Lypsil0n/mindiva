import express from 'express'
import { createPsychologist, getAllPsychologists, getPsychologistByVerbalId } from '../api/psychologistController.js'

const router = express.Router()

router.get('/', getAllPsychologists)
router.get('/:verbalId', getPsychologistByVerbalId)
router.post('/create', createPsychologist)

export default router