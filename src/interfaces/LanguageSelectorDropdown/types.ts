import { Action, ThunkAction } from '@reduxjs/toolkit'
//import { RootState } from '../../store/rootReducer'

// Actions
export const SET_SELECTED_LANGUAGE = 'SET_SELECTED_LANGUAGE'
export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN'
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN'

// Action types
export interface SetSelectedLanguageAction extends Action<typeof SET_SELECTED_LANGUAGE> {
    payload: string
}

export interface ToggleDropdownAction extends Action<typeof TOGGLE_DROPDOWN> {}

export interface CloseDropdownAction extends Action<typeof CLOSE_DROPDOWN> {}

export type LanguageAction = SetSelectedLanguageAction | ToggleDropdownAction | CloseDropdownAction

// State
export interface LanguageState {
    selectedLanguage: string
    isDropdownOpen: boolean
}

// Thunk
//export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
