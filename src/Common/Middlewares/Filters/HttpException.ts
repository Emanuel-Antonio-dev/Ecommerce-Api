class HttpException extends Error
{
    statusCode: number
    details: any
    success: boolean
    
    constructor(success: boolean, statusCode: number, message: string, details?: any)
    {
        super(message)
        this.statusCode = statusCode
        this.details = details
        this.success = success
        Object.setPrototypeOf(this, HttpException.prototype);
    }
}
export {HttpException}