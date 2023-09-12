import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { TRANSLATIONS } from '../utils/translations';
import {Language} from "../interfaces/LanguageSelectorDropdown/reducer";

export const useTranslation = () => {
    const selectedLanguage = useSelector((state: RootState) => state.language.selectedLanguage);

    const translate = (key: string) => {
        return TRANSLATIONS[key][selectedLanguage] || key;
    };

    return { translate };
};