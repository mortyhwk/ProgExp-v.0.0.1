import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const enum ThemeMode {
    WHITE,
    DARK
}

interface ThemeModeState {
    currentThemeMode: ThemeMode
}

const initialState: ThemeModeState = {
    currentThemeMode: ThemeMode.WHITE
}

export const themeModeSlice = createSlice({
    name: 'themeMode',
    initialState,
    reducers: {
        setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
            state.currentThemeMode = action.payload
        },
    }
})

export const { setThemeMode } = themeModeSlice.actions
export const themeModeReducer = themeModeSlice.reducer