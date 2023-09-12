import React from 'react'
import './styles.sass'
// import styles from './style.module.sass'
import {ButtonType} from '../../types'
import {CSSTransition} from "react-transition-group"
// import styled from "@emotion/styled"

interface IButtonProps {
    isShowAnim: boolean
    text?: string
    style?: { [key: string]: string }
    type: ButtonType
    disabled?: boolean
    onClick?: () => void
    centeredText?: boolean
}

// const ButtonStyled = styled.button`
//   background-color: hotpink;
// `

const Button: React.FC<IButtonProps> = ({
                                            isShowAnim,
                                            text,
                                            style = {},
                                            type,
                                            disabled,
                                            onClick = () => {
                                            },
                                            centeredText
                                        }) => {
    return (
        <CSSTransition in={isShowAnim} timeout={{enter: 600, exit: 300}} mountOnEnter unmountOnExit classNames='Button'>
            <div
                className={`Button${disabled ? ' disabled' : ''} type-${type}${
                    centeredText ? ' centeredText' : ''
                }`}
                style={style}
                onClick={onClick}
            >
                {text}
            </div>
        </CSSTransition>
    )
}

export default Button
