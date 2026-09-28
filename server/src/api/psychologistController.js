import Psychologist from "../models/psychologist.js"

const getAllPsychologists = async (req, res) => {
    try {
        const psychologists = await Psychologist.findAll()
        res.json(psychologists)
    }
    catch (error) {
        res.status(500).json({"status": "error", "error": error.message});
    }
}

const getPsychologistByVerbalId = async (req, res) => {
    try {
        const verbalId = req.params.verbalId
        const psychologist = await Psychologist.findOne( {where: {verbalId: verbalId} } )

        if (!psychologist) {
            return res.status(404).json({"status": "error", "error": "not found"})
        }

        res.json(psychologist)
    }
    catch (error) {
        res.status(500).json({"status": "error", "error": error.message});
    }
}

const createPsychologist = async (req, res) =>  {
    try {
        const psychologist = await Psychologist.create(req.body)
        res.json({"status": "ok", "data": psychologist})
    }
    catch (error) {
        res.status(500).json({"status": "error", "error": error.message});
    }
}

export {getAllPsychologists, createPsychologist, getPsychologistByVerbalId}