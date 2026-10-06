import Account from "../models/account.js";
import { comparePassword, hashPassword } from "../utils/authUtil.js";

const createAccount = async (req, res) => {
    try {
        const hashedPassword = await hashPassword(req.body.password)
        req.body.passwordHash = hashedPassword
        const account = await Account.create(req.body)
        res.json({"status": "ok", data: {"id": account.id}})
    }
    catch (error) {
        res.status(500).json({"status": "error", "error": error.message});
    }
}

const login = async (req, res) => {
    try {
        const user = await Account.findOne( {where: {email: req.body.email} } )
        const password = req.body.password

        if (!user) {
            return res.status(401).json({"status": "error", "error": "invalid credentials"})
        }

        const correctPassword = await comparePassword(password, user.passwordHash)

        if (!correctPassword) {
            return res.status(401).json({"status": "error", "error": "invalid credentials"})
        }
        res.json({"status": "ok", data: {"id": user.id}})

    } catch (error) {
        res.status(500).json({"status": "error", "error": error.message});
    }
}

export {createAccount, login}