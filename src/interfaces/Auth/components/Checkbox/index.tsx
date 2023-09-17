import React from 'react'
import './styles.sass'
import {CSSTransition} from 'react-transition-group'

interface ICheckboxProps {
    isShowAnim: boolean
    text: string
    style?: {
        [key: string]: string
    }
    checked: boolean
    setChecked: (newValue: boolean) => void
}

const Checkbox: React.FC<ICheckboxProps> = ({isShowAnim, text, style, checked, setChecked}) => {
    return (
        <CSSTransition in={isShowAnim} timeout={{enter: 600, exit: 300}} mountOnEnter unmountOnExit
                       classNames='checkbox-field'>
            <div
                className={`checkbox-field${checked ? ' active' : ''}`}
                style={style}
                onClick={() => setChecked(!checked)}
            >
                <div className="checkbox-box">
                    <div className="checkbox-box-background"/>
                    <div className="checkbox-box-border"/>
                    <svg className="tick" xmlns="http://www.w3.org/2000/svg"
                        // width="20%"
                        // height="20%"
                         viewBox="0 0 49.96 37.33">
                        <use href="#tick" x="-1"/>
                    </svg>
                </div>
                <div className="text">{text}</div>
            </div>
        </CSSTransition>
    )
}

export default Checkbox
