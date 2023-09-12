import React from 'react'
import { motion } from 'framer-motion'
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux'
import { toggleDropdown } from '../../reducer'
import { getFlagImageSrc } from '../../../../utils/languageHelpers'
import {Language} from "../../reducer";
import {allLanguages} from "../../reducer"
import './styles.sass'

const LanguageSelectorButton: React.FC = () => {
    const dispatch = useAppDispatch()
    const selectedLanguage = useAppSelector((state) => state.language.selectedLanguage)
    const isDropdownOpen = useAppSelector((state) => state.language.isDropdownOpen)
    const languageName = allLanguages.find(lang => lang.id === selectedLanguage)?.name || '';
    const languageId = allLanguages.find(lang => lang.id === selectedLanguage)?.id || Language.RU;

    return (
        <motion.div
            className={`selected-language ${isDropdownOpen ? 'dropdown-open' : ''}`}
            onClick={() => dispatch(toggleDropdown())}
        >
            <img
                className="flag-image"
                src={getFlagImageSrc(languageId)}
                alt={languageName}
            />
            {languageName}
            <div className="bg" />
        </motion.div>
    )
}

export default LanguageSelectorButton
