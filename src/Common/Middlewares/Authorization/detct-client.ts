import { Request, Response, NextFunction } from "express"
import { ClientType, RequestWithCredentials } from "../../../interfaces/Shared/authentication.interface"

export function detectClient(
  req: RequestWithCredentials,
  res: Response,
  next: NextFunction
) {
  const clientType =
    req.header("X-Client-Type")

  req.clientType = clientType as ClientType

  next()
}