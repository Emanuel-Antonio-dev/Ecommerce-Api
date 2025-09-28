import fs from "node:fs"
import path from 'node:path';

const pathDir = path.join(__dirname, "./Logs")

function getErrorsDetails(error: any) {
  const logPath = path.join(pathDir, "errors.txt");

  const errorMessage =
    error instanceof Error ? error.stack || error.message : String(error);

  const logLine = `
  ===================================================
  [${new Date().toLocaleString()}]
  Erro capturado:
  ${errorMessage}
  ===================================================\n
  `;
  fs.appendFileSync(logPath, logLine);
}

export {getErrorsDetails}