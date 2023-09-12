import {Language} from "../interfaces/LanguageSelectorDropdown/reducer";

type Translations = {
    [key: string]: {
        [key in Language]: string;
    };
};

export const TRANSLATIONS: Translations = {
    LOGIN_INPUT_TEXT: {
        [Language.RU]: 'Введите свой логин',
        [Language.EN]: 'Enter your username',
        [Language.UA]: 'Введіть свій логін'
    },
    PASSWORD_INPUT_TEXT: {
        [Language.RU]: 'Введите свой пароль',
        [Language.EN]: 'Enter your password',
        [Language.UA]: 'Введіть свій пароль'
    },
    AUTHORIZATION_TEXT: {
        [Language.RU]: 'Авторизация',
        [Language.EN]: 'Authorization',
        [Language.UA]: 'Авторизація'
    },
    GREETING_FOR_AUTH_PART_1_TEXT: {
        [Language.RU]: 'Добро пожаловать!',
        [Language.EN]: 'Welcome!',
        [Language.UA]: 'Ласкаво просимо!'
    },
    GREETING_FOR_AUTH_PART_2_TEXT: {
        [Language.RU]: 'Войдите в свой аккаунт или зарегистрируйте новый',
        [Language.EN]: 'Log in with your account or register a new one',
        [Language.UA]: 'Увійдіть під своїм акаунтом або зареєструйте новий'
    },
    REMEMBER_ME_TEXT: {
        [Language.RU]: 'Запомнить меня',
        [Language.EN]: 'Remember me',
        [Language.UA]: 'Запам\'ятати мене'
    },
    SIGN_IN_BUTTON_TEXT: {
        [Language.RU]: 'Войти',
        [Language.EN]: 'Sign In',
        [Language.UA]: 'Увійти'
    },
    SIGN_UP_BUTTON_TEXT: {
        [Language.RU]: 'Зарегистрироваться',
        [Language.EN]: 'Sign Up',
        [Language.UA]: 'Зареєструватися'
    },
    FORGOT_PASSWORD_TEXT: {
        [Language.RU]: 'Забыли пароль?',
        [Language.EN]: 'Forgot your password?',
        [Language.UA]: 'Забули пароль?'
    }
};