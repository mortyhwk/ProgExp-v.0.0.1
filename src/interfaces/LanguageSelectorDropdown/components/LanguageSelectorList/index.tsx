import React from 'react'
import { motion } from 'framer-motion'
import LanguageSelectorItem from '../LanguageSelectorItem'
import { useAppSelector } from '../../../../hooks/redux'
import {allLanguages} from "../../reducer"
import './styles.sass'

const LanguageSelectorList: React.FC = () => {

    const selectedLanguage = useAppSelector((state) => state.language.selectedLanguage)
    const filteredLanguages = allLanguages.filter((language) => language.id !== selectedLanguage)
    return (
        <motion.ul
            className="language-list"
            initial={{ opacity: 0, scaleY: 0, transformOrigin: 'top' }}
            animate={{ opacity: 1, scaleY: 1, transformOrigin: 'top' }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{
                duration: 0.25,
                ease: 'easeOut'
            }}
        >
            {filteredLanguages.map((language) => (
                <LanguageSelectorItem key={language.id} languageName={language.name} languageId={language.id} />
            ))}
        </motion.ul>
    )
}

export default LanguageSelectorList
