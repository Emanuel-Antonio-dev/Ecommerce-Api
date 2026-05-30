import { Request, Response } from "express"
import limitrer from "express-rate-limit"

const limiterMiddleware = (
  message: string,
  time: number = 1,
  maxRequests: number = 5
) => {
  return limitrer({
    windowMs: time * 60 * 1000,
    max: maxRequests,

    standardHeaders: true,
    legacyHeaders: false,

    handler: (req: Request, res: Response) => {
      return res.status(429).json({
        success: false,
        statusCode: 429,
        message
      })
    }
  })
}

export{limiterMiddleware}