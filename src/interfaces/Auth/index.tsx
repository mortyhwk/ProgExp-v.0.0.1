import React, { useEffect, useRef } from 'react'
import './styles.sass'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import SignInPage from './pages/SignInPage'
import { PageIds } from './types'
import { sendNotify } from '../../utils/notify'
import { NotificationPositions, NotificationTypes } from '../../shared/notifications/types'
import { authActions } from './reducer'

const Auth: React.FC = () => {
    const { isOpen } = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch()
    const nodeRef = useRef(null)

    const sendAnyNotify = (type: NotificationTypes, text: string, duration: number = 5) => {
        sendNotify({
            type,
            text,
            position: NotificationPositions.Bottom,
            duration
        })
    }

    useEffect(() => {
        dispatch(authActions.show())
        // dispatch(authActions.hide())
    }, [])

    return (
        <div className="Auth">
            <SignInPage sendNotify={sendAnyNotify} />
        </div>
    )
}

export default Auth
