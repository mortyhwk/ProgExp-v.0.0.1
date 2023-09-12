import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PageIds, Rules } from './types'

type AuthState = {
    isOpen: boolean
    page: PageIds
    loginUsername: string
    loginPassword: string
    registerUsername: string
    registerPassword: string
    registerPasswordConfirm: string
    registerEmail: string
    registerUsernameMessage: string
    registerUsernameActive: boolean
    registerPasswordMessage: string
    registerPasswordActive: boolean
    registerPasswordConfirmMessage: string
    registerPasswordConfirmActive: boolean
    registerEmailMessage: string
    registerEmailActive: boolean
    readRules: boolean
    isButtonActiveRules: boolean
    isButtonTimerRules: boolean
    isScrolledRules: boolean
    countdownRules: number
}

const initialState: AuthState = {
    isOpen: false,
    page: PageIds.SignIn,
    loginUsername: '',
    loginPassword: '',
    registerUsername: '',
    registerPassword: '',
    registerPasswordConfirm: '',
    registerEmail: '',
    registerUsernameMessage: null,
    registerUsernameActive: false,
    registerPasswordMessage: null,
    registerPasswordActive: false,
    registerPasswordConfirmMessage: null,
    registerPasswordConfirmActive: false,
    registerEmailMessage: null,
    registerEmailActive: false,
    readRules: false,
    isButtonActiveRules: false,
    isButtonTimerRules: false,
    isScrolledRules: false,
    countdownRules: 3
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        show(state) {
            state.isOpen = true
            state.page = PageIds.SignIn
        },
        hide(state) {
            state.isOpen = false
        },
        setPage(state, action: PayloadAction<PageIds>) {
            state.page = action.payload
        },
        readRules(state, action: PayloadAction<Rules>) {
            state.page = PageIds.SignUpContinue
            if (action.payload) state.readRules = true
        },
        setButtonActiveRules: (state, action: PayloadAction<boolean>) => {
            state.isButtonActiveRules = action.payload
        },
        setScrolledRules: (state, action: PayloadAction<boolean>) => {
            state.isScrolledRules = action.payload
        },
        setButtonTimerRules: (state, action: PayloadAction<boolean>) => {
            state.isButtonTimerRules = action.payload
        },
        setCountdownRules: (state, action: PayloadAction<number>) => {
            state.countdownRules = action.payload
        },
        setLoginUsername(state, action: PayloadAction<string>) {
            state.loginUsername = action.payload
        },
        setLoginPassword(state, action: PayloadAction<string>) {
            state.loginPassword = action.payload
        },
        setRegisterUsername(state, action: PayloadAction<string>) {
            state.registerUsername = action.payload
        },
        setRegisterPassword(state, action: PayloadAction<string>) {
            state.registerPassword = action.payload
        },
        setRegisterPasswordConfirm(state, action: PayloadAction<string>) {
            state.registerPasswordConfirm = action.payload
        },
        setRegisterEmail(state, action: PayloadAction<string>) {
            state.registerEmail = action.payload
        },
        setRegisterUsernameMessage(state, action: PayloadAction<string>) {
            state.registerUsernameMessage = action.payload
        },
        setRegisterUsernameActive(state, action: PayloadAction<boolean>) {
            state.registerUsernameActive = action.payload
        },
        setRegisterPasswordMessage(state, action: PayloadAction<string>) {
            state.registerPasswordMessage = action.payload
        },
        setRegisterPasswordActive(state, action: PayloadAction<boolean>) {
            state.registerPasswordActive = action.payload
        },
        setRegisterPasswordConfirmMessage(state, action: PayloadAction<string>) {
            state.registerPasswordConfirmMessage = action.payload
        },
        setRegisterPasswordConfirmActive(state, action: PayloadAction<boolean>) {
            state.registerPasswordConfirmActive = action.payload
        },
        setRegisterEmailMessage(state, action: PayloadAction<string>) {
            state.registerEmailMessage = action.payload
        },
        setRegisterEmailActive(state, action: PayloadAction<boolean>) {
            state.registerEmailActive = action.payload
        },
    }
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
