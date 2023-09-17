import React from 'react'
import './styles.sass'
import {CSSTransition} from "react-transition-group";

interface ITitleProps {
    isShowAnim: boolean
    text: string
    style?: {
        [key: string]: string
    }
}

const Title: React.FC<ITitleProps> = ({isShowAnim, text, style}) => {
    return (
        <CSSTransition in={isShowAnim} timeout={{enter: 600, exit: 300}} mountOnEnter unmountOnExit classNames='Title'>
            <div className="Title" style={style}>{text}</div>
        </CSSTransition>
    )
}

export default Title
