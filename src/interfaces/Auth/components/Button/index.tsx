import React from 'react'
import './styles.sass'
import {ButtonType} from '../../types'
import Checkbox from '../Checkbox'
import {CSSTransition} from 'react-transition-group'

interface IButtonProps {
    isShowAnim: boolean
    arrowState?: string
    text?: string
    style?: { [key: string]: string }
    type: ButtonType
    disabled?: boolean
    onClick?: () => void
    checked?: boolean
    setChecked?: (newValue: boolean) => void
}

const Button: React.FC<IButtonProps> = ({
                                            isShowAnim,
                                            arrowState,
                                            text,
                                            style = {},
                                            type,
                                            disabled,
                                            onClick = () => {
                                            },
                                            checked,
                                            setChecked
                                        }) => {
    return (
        <CSSTransition in={isShowAnim} timeout={{enter: 600, exit: 300}} mountOnEnter unmountOnExit classNames='btn'>
            <>
                {type !== ButtonType.TransparentCheckbox ?
                    (
                        <div
                            className={`btn btn-ripple${disabled ? ' disabled' : ''} type-${type}`}
                            style={style}
                            onClick={onClick}
                        >
                            {text}
                            {type === 3 && (
                                <svg className={`arrow-${arrowState}`} xmlns="http://www.w3.org/2000/svg"
                                     width="25%"
                                     height="25%"
                                     viewBox="0 0 28 44.52">
                                    <use href="#arrow"/>
                                </svg>
                            )}
                        </div>
                    ) : (
                        <div
                            className={`btn btn-ripple${disabled ? ' disabled' : ''} type-${type}`}
                            style={style}
                            onClick={() => setChecked(!checked)}
                        >
                            <Checkbox
                                isShowAnim={isShowAnim}
                                text={text}
                                checked={checked}
                                setChecked={setChecked}
                            />
                        </div>
                    )
                }

            </>
        </CSSTransition>
    )
}

export default Button
