import React, { HTMLInputTypeAttribute, useRef, useState } from 'react'
import './styles.sass'
import { CSSTransition } from 'react-transition-group'
import { AnimatePresence, motion } from 'framer-motion'

interface IInputProps {
    isShowAnim: boolean
    style?: {
        [key: string]: string
    }
    value: string
}

const Error: React.FC<IInputProps> = ({ isShowAnim, style = {}, value }) => {
    return (
        <CSSTransition
            in={isShowAnim}
            timeout={{ enter: 600, exit: 300 }}
            mountOnEnter
            unmountOnExit
            classNames="Error"
        >
            <div className="Error">
                <AnimatePresence initial={false}>
                    {value ? (
                        <motion.div
                            initial={{
                                opacity: 0,
                                height: 0,
                                marginBottom: 0
                            }}
                            animate={{ opacity: 1, height: 'auto', marginBottom: '8px' }}
                            exit={{
                                opacity: 0,
                                height: 0,
                                marginBottom: 0
                            }}
                        >
                            {value}
                        </motion.div>
                    ) : (
                        ''
                    )}
                </AnimatePresence>
            </div>
        </CSSTransition>
    )
}

export default Error
