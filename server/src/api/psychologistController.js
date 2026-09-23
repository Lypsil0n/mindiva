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

export {getAllPsychologists}