import {Language} from "../interfaces/LanguageSelectorDropdown/reducer";
// @ts-ignore
import ruFlag from '../interfaces/LanguageSelectorDropdown/assets/images/ru.svg'
// @ts-ignore
import euFlag from '../interfaces/LanguageSelectorDropdown/assets/images/eu.svg'
// @ts-ignore
import uaFlag from '../interfaces/LanguageSelectorDropdown/assets/images/ua.svg'

export const getFlagImageSrc = (language: Language): string => {
    switch (language) {
        case Language.RU:
            return ruFlag;
        case Language.EN:
            return euFlag;
        case Language.UA:
            return uaFlag;
        default:
            return '';
    }
}