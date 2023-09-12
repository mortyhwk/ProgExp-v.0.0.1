import React from 'react'
import './styles.sass'

interface ITitleProps {
    text: string
    style?: {
        [key: string]: string
    }
}

const Title: React.FC<ITitleProps> = ({text, style}) => {
    return (
        <div className="Title" style={style}>{text}</div>
    )
}

export default Title
