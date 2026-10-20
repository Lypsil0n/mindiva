import UserData from "../models/userData.js";
import { generateIdentificationString } from "../utils/authUtils.js";

const insertUserData = async (req, res) => {
    try {
        const identifcationString = generateIdentificationString()

        req.body.identificationString = identifcationString

        const userData = await UserData.create(req.body)
        res.json({"status": "ok", "data": userData})
    }
    catch (error) {
        res.status(500).json({"status": "error", "error": error.message});
    }
}

export {insertUserData}