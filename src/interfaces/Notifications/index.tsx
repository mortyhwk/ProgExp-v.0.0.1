import './styles.sass'
import React, {useEffect, useRef} from 'react'
import {useAppSelector} from '../../hooks/redux'
import {Notification} from './types'
import {useDispatch} from 'react-redux'
import {notificationsActions, notificationsReducer, notificationsSlice} from './reducer'
import {NotificationPositions} from '../../shared/notifications/types'
import {motion, AnimatePresence, easeIn} from 'framer-motion'
import 'animate.css'
// @ts-ignore
import iconError from '../Auth/assets/images/error.svg'
// @ts-ignore
import iconSuccess from '../Auth/assets/images/success.svg'

const Notifications: React.FC = () => {
    const dispatch = useDispatch()
    const {list, rendered} = useAppSelector((state) => state.notifications)
    // const [isShowContent, setIsShowContent] = useState(true)
    const isAnimIn = list.length > 0
    const nodeRef = useRef(null)

    useEffect(() => {
        // @ts-ignore
        window.sendNotify = (data) => {

            console.log(list)
            dispatch(notificationsActions.send(data))
        }
        // @ts-ignore
        window.removeNotify = (id) => {
            dispatch(notificationsActions.removeFromRendered(id))
            setTimeout(() => {
                dispatch(notificationsActions.removeFromList(id))
            }, 500)
        }
    }, [])

    // const renderList = (list: Notification[]) => list.map(({id, type, text}) => {
    //     const animationName = ~rendered.indexOf(id) ? 'enter' : 'exit'
    //     return (
    //         <div
    //             className={`Notify type-${type}`}
    //             key={id}
    //             style={{
    //                 animation: `2s ease 0s 1 normal none running ${animationName}`,
    //             }}>
    //             {text}
    //         </div>
    //     )
    // })

    const sortedList = list.slice(-5)

    return (
        <>
            <ul className="NotificationsList bottom" ref={nodeRef}>
                <AnimatePresence initial={false}>
                    {sortedList.map(({id, type, text}) => (
                        <motion.li
                            key={id}
                            initial={{
                                y: 0,
                                height: 0,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                height: 'auto',
                                opacity: 1,
                                scale: 1
                            }}
                            exit={{
                                y: '100%',
                                height: 0,
                                opacity: 0,
                                transition: {
                                    duration: 0.5,
                                    ease: 'easeOut'
                                }
                            }}
                            transition={{
                                duration: 0.5,
                                ease: 'easeOut'
                            }}
                            style={{listStyleType: 'none'}}
                        >
                            <div className="Notify">
                                {type === 1 ? (
                                    <img
                                        src={iconError}
                                        className="status animate__animated animate__heartBeat"
                                        alt="Ошибка"
                                    />
                                ) : (
                                    <img
                                        src={iconSuccess}
                                        className="status animate__animated animate__heartBeat"
                                        alt="Успешно"
                                    />
                                )}
                                {text}
                            </div>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
            {/*<div className='NotificationsList topLeft'>*/}
            {/*    {renderList(list.filter(({position}) => position === NotificationPositions.TopLeft))}*/}
            {/*</div>*/}
            {/*<div className='NotificationsList bottom'>*/}
            {/*    {renderList(list.filter(({position}) => position === NotificationPositions.Bottom).reverse())}*/}
            {/*</div>*/}
        </>
    )
}

export default Notifications
