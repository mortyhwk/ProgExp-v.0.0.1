import React from 'react'
import './index.sass'
import Auth from './interfaces/Auth'
import LanguageSelectorDropdown from './interfaces/LanguageSelectorDropdown'
import Notifications from './interfaces/Notifications'

const App: React.FC = () => {
    return (
        <>
            <LanguageSelectorDropdown/>
            <Notifications />
            <Auth />
        </>
    )
}

export default App
