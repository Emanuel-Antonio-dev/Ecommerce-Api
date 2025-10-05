import { Request, Response } from "express"
import limitrer from "express-rate-limit"

const limiterConfig = (message: string, time: number = 2) =>{
    return limitrer({
    windowMs: time * 60 * 1000,
    max: 4,
    handler: (req:Request, res: Response)=>{
        return res.status(429).json({success: false, statusCode: 429, message: message})
    },
    legacyHeaders: false,
    standardHeaders: true
})
}
export{limiterConfig}