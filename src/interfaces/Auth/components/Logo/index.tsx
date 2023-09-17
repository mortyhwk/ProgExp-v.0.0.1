import React from 'react'
import './styles.sass'
import {CSSTransition} from "react-transition-group";

interface ILogoProps {
    isShowAnim: boolean
    style?: {
        [key: string]: string
    }
}

const Logo: React.FC<ILogoProps> = ({isShowAnim, style}) => {
    return (
        <CSSTransition in={isShowAnim} timeout={{enter: 600, exit: 300}} mountOnEnter unmountOnExit
                       classNames='sign-logo'>
            <div className="sign-logo" style={style}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 70.54 46.63">
                    <use href="#logotype-black"/>
                </svg>
            </div>
        </CSSTransition>
    )
}

export default Logo
