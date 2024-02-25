import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/router.js'
import rateLimit from 'express-rate-limit'
import axios from 'axios'

dotenv.config()

const PORT = process.env.PORT || 5000

const limit = rateLimit({
    windowMs: minToMs(10),
    max: 100
})

const app = express()

app.use(express.static('public'))

app.set('trust proxy', 1)
app.use(limit)
app.use(express.json())
app.use(cors())

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    })

function minToMs(min) {
    return min * 60 * 1000
}