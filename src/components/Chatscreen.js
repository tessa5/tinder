import React, {useState} from 'react'

function Chatscreen() {
    const [messages, setMessages] = useState([
        {
            name: 'spongebob',
            image: 'https://i.pinimg.com/originals/87/64/ce/8764cefa9f88169972a8a20f2a69e8ce.jpg',
            message: 'Hello '
        },
        {
            message: 'Hows it going? '
        }
    ])
    return (
        <div>
            <p>YOU MATCHED WITH SPONGEBOB ON 15/3/21</p>
            {messages.map((message) => (
                <div>
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    )
}

export default Chatscreen