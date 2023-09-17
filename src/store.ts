import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './interfaces/Auth/reducer'
import { notificationsReducer } from './interfaces/Notifications/reducer'
import { languageReducer } from './interfaces/LanguageSelectorDropdown/reducer'
import { themeModeReducer } from './interfaces/Theme/reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    notifications: notificationsReducer,
    language: languageReducer,
    themeMode: themeModeReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
