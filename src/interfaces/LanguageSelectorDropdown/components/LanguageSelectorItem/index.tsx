import React from 'react'
import { motion } from 'framer-motion'
import { useAppDispatch } from '../../../../hooks/redux'
import { setSelectedLanguage, toggleDropdown } from '../../reducer'
import { getFlagImageSrc } from '../../../../utils/languageHelpers'
import {Language} from "../../reducer";
import './styles.sass'

interface LanguageSelectorItemProps {
    languageName: string
    languageId: Language
}

const LanguageSelectorItem: React.FC<LanguageSelectorItemProps> = ({ languageName, languageId}) => {
    const dispatch = useAppDispatch()

    const handleLanguageChange = () => {
        dispatch(setSelectedLanguage(languageId))
        dispatch(toggleDropdown())
    }

    return (
        <motion.li className="language-item" onClick={handleLanguageChange}>
            <img className="flag-image" src={getFlagImageSrc(languageId)} alt={languageName} />
            {languageName}
        </motion.li>
    )
}

export default LanguageSelectorItem
