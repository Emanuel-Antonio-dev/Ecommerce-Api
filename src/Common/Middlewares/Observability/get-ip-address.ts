import { Request, Response, NextFunction} from "express";
import fs from "fs"
import path from "path"

const pathDir = path.join(__dirname, "./Logs")
if(!fs.existsSync(pathDir))
{
    fs.mkdirSync(pathDir,{recursive: true})
}

const logFilePath = path.join(pathDir, "logs.txt")
if(!fs.existsSync(logFilePath))
{
    fs.writeFileSync(logFilePath, "")
}

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
    
    const logLine = `
    ===================================================
    DataTime: [${new Date().toLocaleString()}]
    IP: ${ip}
    Rota: ${req.method} ${req.originalUrl}
    Proveniência (User-Agent): ${from}
    ===================================================\n
    `;
    try
    {
        fs.appendFileSync(logFilePath, logLine);
    }
    catch (err)
    {
        console.error("Erro ao escrever no arquivo de log:", err);
    }
  next()
}
export{getRequestIp}