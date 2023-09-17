import React, {useEffect, useRef} from 'react'
import './styles.sass'
import {CSSTransition} from 'react-transition-group'
import {AnimatePresence} from 'framer-motion'
import LanguageSelectorButton from './components/LanguageSelectorButton'
import LanguageSelectorList from './components/LanguageSelectorList'
import {useAppSelector, useAppDispatch} from '../../hooks/redux'
import {toggleDropdown} from './reducer'
import {PageIds} from '../Auth/types'

const LanguageSelectorDropdown: React.FC = () => {
    const dispatch = useAppDispatch()
    const isDropdownOpen = useAppSelector((state) => state.language.isDropdownOpen)
    const {isOpen, page} = useAppSelector((state) => state.auth)
    const isAnimIn = isOpen && page !== PageIds.Disclaimer
    const nodeRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isDropdownOpen &&
                nodeRef.current &&
                !nodeRef.current.contains(event.target as Node)
            ) {
                dispatch(toggleDropdown())
            }
        }

        if (isDropdownOpen) {
            window.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            window.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dispatch, isDropdownOpen])

    return (
        <CSSTransition
            in={isAnimIn}
            timeout={250}
            mountOnEnter
            unmountOnExit
            classNames="language-selector-dropdown"
        >
            <div className="language-selector-dropdown" ref={nodeRef}>
                <LanguageSelectorButton/>
                <AnimatePresence>
                    {isDropdownOpen && <LanguageSelectorList/>}
                </AnimatePresence>
            </div>
        </CSSTransition>
    )
}

export default LanguageSelectorDropdown