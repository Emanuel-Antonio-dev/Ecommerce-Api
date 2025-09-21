class PasswordValidator
{
    static IsValidPassword(password: string)
    {
    const RegexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/
    return RegexPassword.test(password)
    }
}
export{PasswordValidator}