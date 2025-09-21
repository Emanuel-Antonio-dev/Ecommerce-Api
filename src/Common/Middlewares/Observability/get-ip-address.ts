import { Request, Response, NextFunction} from "express";
import fs from "fs"
import path from "path"

const pathDir = path.join(__dirname, "./Logs")
if(!fs.existsSync(pathDir))
{
    fs.mkdirSync("Logs",{recursive: true})
}
fs.writeFileSync(path.join(pathDir, "logs.txt"), "", {flag: "a"})
function getRequestIp(req: Request, res: Response, next: NextFunction)
{
    let ip: string | string[] | undefined = req.headers["x-forwarded-for"]
    const from = req.headers["user-agent"]
    if(ip)
    {
        if(Array.isArray(ip))
        {
            ip = ip[0]
        }
        else
        {
            ip = ip.split(' ')[0].trim()
        }
    }
    else
    {
        ip = req.socket.remoteAddress
    }
    if(ip && ip.startsWith("::ffff"))
    {
        ip = ip.substring(7)
    }
    (req as any ).clientIp = ip || 'unknow'
    fs.appendFileSync(path.join(pathDir, "logs.txt"), `Requisição feita via Ip Adress: ${ip}, data: ${new Date().toLocaleString()}\n, proveniencia: ${from}\n`)
    next()
}
export{getRequestIp}