type AuthValidationRegExp = {
    Length?: RegExp
    AllowedChars: RegExp
}

type ValidationRegExps = {
    usernameRegExps: AuthValidationRegExp
    passwordRegExps: AuthValidationRegExp
    emailRegExps: AuthValidationRegExp
    promocodeRegExps: AuthValidationRegExp
}

export const AuthValidationRegExps: ValidationRegExps = {
    usernameRegExps: {
        Length: /^.{3,20}$/,
        AllowedChars: /^[a-zA-Z0-9]{0,100}$/
    },
    passwordRegExps: {
        Length: /^.{6,20}$/,
        AllowedChars: /^[a-zA-Z0-9]{0,100}$/
    },
    emailRegExps: {
        AllowedChars: /^[a-zA-Z0-9.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
    },
    promocodeRegExps: {
        AllowedChars: /^[a-z0-9]{3,10}$/
    }
}
