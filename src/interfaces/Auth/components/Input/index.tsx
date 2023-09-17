import React, {useRef, useState} from 'react'
import './styles.sass'
import {CSSTransition} from "react-transition-group";

interface IInputProps {
    isShowAnim: boolean
    style?: {
        [key: string]: string
    }
    title?: string
    placeholder: string
    value: string
    setValue: (newValue: string) => void
    autoFocus?: boolean
    hasEye?: boolean
    hasUser?: boolean
    hasPassword?: boolean
    hasEmail?: boolean
    onChange?: (newValue: string) => void
    activeUsername?: boolean
    activePassword?: boolean
    onEnterKeyPress?: () => void
}

const Input: React.FC<IInputProps> = ({
                                          isShowAnim,
                                          style = {},
                                          title,
                                          placeholder,
                                          value,
                                          setValue,
                                          autoFocus,
                                          hasEye,
                                          hasUser,
                                          hasPassword,
                                          hasEmail,
                                          onChange,
                                          activeUsername,
                                          activePassword,
                                          onEnterKeyPress
                                      }) => {
    const [isHasEye, setIsHasEye] = useState(hasEye)
    const inputRef = useRef(null)
    const placeholderRef = useRef(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setValue(newValue)
        if (onChange) onChange(newValue)
    }

    const handleAction = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && onEnterKeyPress) {
            onEnterKeyPress()
        }
    }

    return (
        <CSSTransition in={isShowAnim} timeout={{enter: 600, exit: 300}} mountOnEnter unmountOnExit
                       classNames='input-wrapper'>
            <div className="input-wrapper" style={style}>
                <div className="input-field">
                    <input
                        ref={inputRef}
                        type={isHasEye ? 'password' : 'text'}
                        value={value}
                        spellCheck={false}
                        placeholder=""
                        onChange={handleChange}
                        maxLength={40}
                        onKeyDown={handleAction}
                        autoFocus={autoFocus}
                        autoCorrect="off"
                        autoCapitalize="off"
                        title={title}
                    />
                    <div className="input-field-background"/>
                    <div className="input-field-border"/>
                    {hasEye && (
                        <div
                            className={`eye ${isHasEye && 'hidden'}`}
                            onClick={(event) => {
                                event.preventDefault()
                                setIsHasEye((prev) => !prev)
                            }}
                            onMouseDown={(event) => {
                                event.preventDefault()
                            }}
                            onMouseUp={(event) => {
                                event.preventDefault()
                            }}
                        />

                    )}
                    {hasUser && <div className={`user ${activeUsername && 'activeUsername'}`}/>}
                    {hasPassword && (
                        <div className={`password ${activePassword && 'activePassword'}`}/>
                    )}
                    {hasEmail && <div className={`email ${activePassword && 'activeEmail'}`}/>}
                    <span ref={placeholderRef}
                          className="input-field-placeholder">{placeholder}</span>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Input
