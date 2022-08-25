import express, { json } from 'express'
import colors from 'colors'
// import dotenv from 'dotenv/config'
import { connectDB } from './config/db.js'
import itemRoute from './routes/itemRoute.js'
// import adminRoute from './routes/adminRoute.js'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'

connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const port = process.env.PORT || 5000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



app.use('/api/items', itemRoute)
// app.use('/api/admins', adminRoute)

// app.use(express.static(path.join(__dirname, './index.html')))

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './', 'index.html'))
// })






app.listen(port, () => { console.log(`server running on port ${port}`.cyan.underline) })