import { Response, Request, NextFunction} from "express"
import { HttpException } from "./HttpException"
import multer from "multer"

function ErrorHandler(err: any, req: Request, res: Response, next: NextFunction)
{
    const status = err.statusCode || 500
    const message = err.message || "Ocorreu um erro interno, tente novamente"
    const details = err.details || null

    res.status(status).json({
        statusCode: status,
        message,
        ...(details && {details})
    })
}
function multerErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Erros do multer
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: err.message,
    });
  }

  // Erros personalizados (HttpException)
  if (err instanceof HttpException) {
    return res.status(err.statusCode).json({
      success: false,
      statusCode: err.statusCode,
      message: err.message,
    });
  }

  // Outros erros
  if (err) {
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Erro ao processar upload do arquivo",
    });
  }

  next();
}
export {ErrorHandler, multerErrorHandler}