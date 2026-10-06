import Account from "../models/account.js";
import { comparePassword, hashPassword } from "../utils/authUtil.js";
import { uuidv7 } from "uuidv7";

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

        const token = btoa(uuidv7())
        const tokenHash = await hashPassword(token)

        user.tokenHash = tokenHash
        user.save()

        res.json({"status": "ok", data: {"id": user.id, "token": token}})

    } catch (error) {
        res.status(500).json({"status": "error", "error": error.message});
    }
}

const logout = async (req, res) => {
    try {
        const user = await Account.findOne( {where: {email: req.body.email} } )

        if (!user) {
            return res.status(401).json({"status": "error", "error": "invalid credentials"})
        }

        user.tokenHash = null
        user.save()

        res.json({"status": "ok"})

    } catch (error) {
       res.status(500).json({"status": "error", "error": error.message}); 
    }
}

export {createAccount, login, logout}