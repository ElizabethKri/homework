import React from 'react'
import s from './Message.module.css'
import avatar from '../avatar.png';

// нужно создать правильный тип вместо any
export type UserType = {
    avatar: string
    name: string
}

export type MessageFriendType = {
    text: string,
    time: string
}

export type Message0PropsType = {
    id: number,
    user: UserType,
    message: MessageFriendType
}

export type MessagePropsType = {
    message: Message0PropsType
}

// нужно отобразить приходящие данные
const Message = ({message}: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img width={80} height={80}
                    id={'hw1-avatar-' + message.id}
                    // создаёт студент
                    src={message.user.avatar}
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + message.id} className={s.name}>
                        {/*создаёт студент*/}
                        {message.user.name}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {message.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + message.id} className={s.time}>
                {/*создаёт студент*/}
                {message.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message
