import React from 'react'
import './styles.sass'
import {useAppDispatch, useAppSelector} from '../../hooks/redux'
import {setThemeMode, ThemeMode} from './reducer'
import SvgDefs from './components/SvgDefs'
import {CSSTransition} from 'react-transition-group'

const Theme: React.FC = () => {
    const dispatch = useAppDispatch()
    const themeMode = useAppSelector((state) => state.themeMode.currentThemeMode)

    const handleThemeToggle = () => {
        const newThemeMode = themeMode === ThemeMode.WHITE ? ThemeMode.DARK : ThemeMode.WHITE
        if (newThemeMode === ThemeMode.DARK) document.documentElement.setAttribute('dark-theme', '')
        else document.documentElement.removeAttribute('dark-theme')
        dispatch(setThemeMode(newThemeMode))
    }

    return (
        <>
            <SvgDefs/>
            <div className="theme-mode" onClick={handleThemeToggle}>
                <CSSTransition
                    in={themeMode === ThemeMode.WHITE}
                    timeout={600}
                    mountOnEnter
                    unmountOnExit
                    classNames="theme-mode-linkable"
                >
                    <svg className="theme-mode-linkable" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                         viewBox="0 0 59 60.39">
                        <use href="#white-mode"/>
                    </svg>
                </CSSTransition>
                <CSSTransition
                    in={themeMode === ThemeMode.DARK}
                    timeout={600}
                    mountOnEnter
                    unmountOnExit
                    classNames="theme-mode-linkable"
                >
                    <svg className="theme-mode-linkable" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                         viewBox="0 0 46.3 46.3">
                        <use href="#dark-mode"/>
                    </svg>
                </CSSTransition>
            </div>
        </>
    )
}

export default Theme