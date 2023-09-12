import React, {useRef, useState} from 'react'
import './styles.sass'

interface IInputProps {
    style?: {
        [key: string]: string
    }
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
                                          style = {},
                                          label,
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
        <div className="input-wrapper" style={style}>
            {label && <div className="Label">{label}</div>}
            <div className="input-field">
                <input
                    ref={inputRef}
                    type={isHasEye ? 'password' : 'text'}
                    value={value}
                    spellCheck={false}
                    onChange={handleChange}
                    maxLength={40}
                    onKeyDown={handleAction}
                    autoFocus={autoFocus}
                    autoCorrect="off"
                    autoCapitalize="off"
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
                      className={`input-field-placeholder ${value !== '' ? 'active' : ''}`}>{placeholder}</span>
            </div>
        </div>
    )
}

export default Input
