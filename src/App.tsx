import React from 'react'
import './index.sass'
import Theme from './interfaces/Theme'
import Auth from './interfaces/Auth'
import LanguageSelectorDropdown from './interfaces/LanguageSelectorDropdown'
import Notifications from './interfaces/Notifications'

const App: React.FC = () => {
    return (
        <div className="root-element">
            <Theme />
            <Auth />
            <Notifications />
            <LanguageSelectorDropdown/>
        </div>
    )
}

export default App
