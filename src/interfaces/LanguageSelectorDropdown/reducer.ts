import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum Language {
    RU,
    EN,
    UA,
    // BR,
    // KR
}

interface LanguageInfo {
    id: Language;
    name: string;
}

interface LanguageState {
    selectedLanguage: Language
    isDropdownOpen: boolean
}

const initialState: LanguageState = {
    selectedLanguage: Language.RU,
    isDropdownOpen: false
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setSelectedLanguage: (state, action: PayloadAction<Language>) => {
            state.selectedLanguage = action.payload
        },
        toggleDropdown: (state) => {
            state.isDropdownOpen = !state.isDropdownOpen
        },
        closeDropdown: (state) => {
            state.isDropdownOpen = false
        }
    }
})

export const { setSelectedLanguage, toggleDropdown, closeDropdown } = languageSlice.actions
export const languageReducer = languageSlice.reducer

export const allLanguages: LanguageInfo[] = [
    { id: Language.RU, name: 'Русский' },
    { id: Language.EN, name: 'English' },
    { id: Language.UA, name: 'Український' },
    // { id: Language.BR, name: 'Бразилия' },
    // { id: Language.KR, name: 'Корея' },
];