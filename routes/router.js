import { Router } from 'express'
import dotenv from 'dotenv'
import apiCache from 'apicache'

dotenv.config()

let cache = apiCache.middleware

const router = Router()

const ApiValues = {
    api_url: process.env.API_BASE_URL,
    api_key_name: process.env.API_KEY_NAME,
    api_key_value: process.env.API_KEY_VALUE
}

router.get('/', cache('10 minutes'), async (req, res) => {
    const data = {
        "api_url": ApiValues.api_url, 
        "api_key_name": ApiValues.api_key_name, 
        "api_key_value": ApiValues.api_key_value
    }

    res.status(200).json(data)
})

export default router