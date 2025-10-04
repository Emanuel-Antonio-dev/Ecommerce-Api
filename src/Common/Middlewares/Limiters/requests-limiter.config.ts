import limitrer from "express-rate-limit"

const limiterConfig = (message: string, time: number = 2) =>{
    return limitrer({
    windowMs: time * 60 * 1000,
    max: 4,
    message: message,
    legacyHeaders: false,
    standardHeaders: true
})
}
export{limiterConfig}