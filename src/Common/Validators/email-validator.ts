import validator from "validator"
class EmailValidator
{
    static isValidEmail(email: string): boolean
    {
        return validator.isEmail(email)
    }
}
export {EmailValidator}