import React from 'react'
import './styles.sass'
import {CSSTransition} from "react-transition-group";

interface ILogoProps {
    isShowAnim: boolean
    style?: {
        [key: string]: string
    }
    type?: number
}

const Logo: React.FC<ILogoProps> = ({isShowAnim, style, type = 1}) => {
    return (
        <CSSTransition in={isShowAnim} timeout={{enter: 600, exit: 300}} mountOnEnter unmountOnExit classNames='Logotypes'>
            <div className="Logotypes" style={style}>
                {type === 1 || type === 3 ?
                    <div className="BigLogotype"/>
                    : null
                }
                {type === 2 || type === 3 ?
                    <div className="Logotype"/>
                    : null
                }
            </div>
        </CSSTransition>
    )
}

export default Logo
