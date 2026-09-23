import express from 'express'
import { sequelize } from './config/db.js'
import psychologistRoutes from './routes/psychologistRoutes.js'

const app = express()
const port = 5000

app.get("/", async (req, res) => {
    
    try {
        await sequelize.authenticate();
    } 
    catch {
        res.status(500).json({"status": "error"});

    }
    res.json({"status": "ok"})
})

app.use('/api/v1/psychologists', psychologistRoutes)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})