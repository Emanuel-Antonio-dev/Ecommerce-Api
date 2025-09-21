import { Response, Request, NextFunction} from "express"

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
export {ErrorHandler}