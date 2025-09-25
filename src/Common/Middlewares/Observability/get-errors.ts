import fs from "node:fs"
import path from 'node:path';

const pathDir = path.join(__dirname, "./Logs")

function getErrorsDetails(error: string)
{
    fs.writeFileSync(path.join(pathDir, "errors.txt"), "", {flag: "a"})
    fs.appendFileSync(path.join(pathDir, "errors.txt"),
    `
        ===================================================
        Erro:
            ${error}\n
        data: ${new Date().toLocaleString()}\n
        ===================================================
    `)
}
export {getErrorsDetails}