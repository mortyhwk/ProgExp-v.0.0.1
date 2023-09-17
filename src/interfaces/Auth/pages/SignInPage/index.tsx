import React, {useEffect, useRef, useState} from 'react'
import './styles.sass'
import {CSSTransition} from 'react-transition-group'
import {ButtonType, PageIds} from '../../types'
import Logo from '../../components/Logo'
import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'
import {useAppDispatch, useAppSelector} from '../../../../hooks/redux'
import {authActions} from '../../reducer'
import {AuthValidationRegExps} from '../../../../shared/auth/validationRegExps'
// import {handleAuthUsernameChange, handleAuthPasswordChange} from '../../../../utils/signInHelpers'
import {useTranslation} from '../../../../hooks/useTranslation'
import {NotificationPositions, NotificationTypes} from '../../../../shared/notifications/types'

type SignInPageProps = {
    sendNotify: (type: NotificationTypes, text: string, duration?: number) => void
}

const SignInPage: React.FC<SignInPageProps> = ({sendNotify}) => {
    const [isShowContent, setIsShowContent] = useState(true)
    const dispatch = useAppDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isRemember, setIsRemember] = useState(true)
    const [activeUsername, setActiveUsername] = useState(false)
    const [activePassword, setActivePassword] = useState(false)
    const {isOpen, page} = useAppSelector((state) => state.auth)
    const isAnimIn = isOpen && page === PageIds.SignIn
    const nodeRef = useRef(null)
    const {usernameRegExps, passwordRegExps} = AuthValidationRegExps
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const {translate} = useTranslation();

    const handleClickRecover = () => dispatch(authActions.setPage(PageIds.PasswordRecovery))
    const handleClickToSignUp = () => dispatch(authActions.setPage(PageIds.SignUp))

    // const handleUsernameChange = (event: string) => {
    //     handleAuthUsernameChange(event, setActiveUsername)
    // }
    //
    // const handlePasswordChange = (event: string) => {
    //     handleAuthPasswordChange(event, setActivePassword)
    // }

    // useEffect(() => {
    //     const rememberMeData = localStorage.getItem('rememberMeData');
    //     if (rememberMeData) {
    //         const { username, password } = JSON.parse(rememberMeData);
    //         setUsername(username);
    //         setPassword(password);
    //     }
    // }, []);

    const handleSignIn = async () => {
        // localStorage.setItem('rememberMeData', JSON.stringify({ username, password }));
        // sendNotify(NotificationTypes.Success, 'Прочитайте правила сервера');
        // await new Promise<void>((resolve) => {
        //     setTimeout(() => {
        //         sendNotify(NotificationTypes.Error, 'Купите лицензии');
        //         resolve();
        //     }, 1000);
        // });
        //
        // await new Promise<void>((resolve) => {
        //     setTimeout(() => {
        //         sendNotify(NotificationTypes.Error, 'А покушать?');
        //         resolve();
        //     }, 1000);
        // });
        //
        // sendNotify(NotificationTypes.Error, 'Прочитайте правила сервера');
        // sendNotify(NotificationTypes.Error, 'Прочитайте правила сервера');
        // sendNotify(NotificationTypes.Error, 'И снова сходи поажлуйста ты покушать? Надо очень сильно');
        // return 0
        // if (isButtonDisabled) return
        // setIsButtonDisabled(true)
        // setTimeout(() => {
        //     setIsButtonDisabled(false)
        // }, 500)
        // if (username === '' || password === '') return sendNotify(NotificationTypes.Error, 'Эти поля обязательны')
        // if (!usernameRegExps.Length.test(username))
        //     return sendNotify(NotificationTypes.Error, 'Ваш логин не может быть меньше 3 и больше 20 символов')
        // if (!usernameRegExps.AllowedChars.test(username))
        //     return sendNotify(NotificationTypes.Error, 'Ваш логин должен состоять из латинских букв и цифр')
        // if (!passwordRegExps.Length.test(password))
        //     return sendNotify(NotificationTypes.Error, 'Ваш пароль не может быть меньше 6 и больше 20 символов')
        // if (!passwordRegExps.AllowedChars.test(password))
        //     return sendNotify(NotificationTypes.Error, 'Ваш пароль должен состоять из латинских букв и цифр')
        // const event = AuthApiEventNames.SignIn
        // const data: AuthApiSignInData = {username, password}
        // rpc.callClient('executeServer', {event, data})
    }

    return (
        <CSSTransition
            in={isAnimIn}
            timeout={{enter: 250, exit: 250}}
            mountOnEnter
            unmountOnExit
            classNames="SignInPage"
            nodeRef={nodeRef}
            onEnter={() => setIsShowContent(true)}
            onExiting={() => setIsShowContent(false)}
        >
            <div className="SignInPage" ref={nodeRef}>
                <div className="content">
                    <Logo
                        isShowAnim={isShowContent}
                        style={{marginBottom: '35px'}}
                    />
                    <Title
                        isShowAnim={isShowContent}
                        text={translate('GREETING_FOR_AUTH_PART_1_TEXT')}
                        style={{marginBottom: '35px'}}
                    />
                    <div className="row checkbox-wrapper"
                         style={{marginBottom: '8px'}}>
                        <Input
                            isShowAnim={isShowContent}
                            title={translate('LOGIN_HELP_TEXT')}
                            placeholder={translate('LOGIN_INPUT_TEXT')}
                            value={username}
                            setValue={setUsername}
                            style={{marginRight: '5px'}}
                        />
                        <Button
                            isShowAnim={isShowContent}
                            arrowState='right'
                            type={ButtonType.Arrow}
                        />
                    </div>
                    {/*<Checkbox*/}
                    {/*    isShowAnim={isShowContent}*/}
                    {/*    text="Оставаться в системе"*/}
                    {/*    checked={isRemember}*/}
                    {/*    setChecked={setIsRemember}*/}
                    {/*/>*/}
                    <Button
                        isShowAnim={isShowContent}
                        text={translate('REMEMBER_ME_TEXT')}
                        type={ButtonType.TransparentCheckbox}
                        checked={isRemember}
                        setChecked={setIsRemember}
                        style={{marginBottom: '40px'}}
                    />
                    <Button
                        isShowAnim={isShowContent}
                        text={translate('FORGOT_PASSWORD_TEXT')}
                        type={ButtonType.Transparent}
                        onClick={handleClickRecover}
                        style={{marginBottom: '5px'}}
                    />
                    <Button
                        isShowAnim={isShowContent}
                        text={translate('CREATE_ACCOUNT_TEXT')}
                        type={ButtonType.Transparent}
                        onClick={handleClickRecover}
                    />
                </div>
            </div>
        </CSSTransition>
    )
}

export default SignInPage
