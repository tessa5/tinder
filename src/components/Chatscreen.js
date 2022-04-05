import { Avatar } from '@mui/material'
import React, {useState} from 'react'

function Chatscreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'spongebob',
            image: 'https://i.pinimg.com/originals/87/64/ce/8764cefa9f88169972a8a20f2a69e8ce.jpg',
            message: 'Hello you..'
        },
        {
            message: 'Hows it going? '
        }
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input}]);
        setInput('')
    }
    return (
        <div className="">
            <p className="text-center p-4 text-gray-700">YOU MATCHED WITH SPONGEBOB ON 15/3/21</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="flex items-center p-5">
                    <Avatar
                        className=""
                        src={message.image}
                        alt={message.name}
                    />
                    <p className="ml-3 bg-gray-300 p-3 rounded-3xl font-semibold">{message.message}</p>
                </div>
                ) : (
                    <div className="flex items-center p-5">
                        <p className="ml-auto bg-cyan-400 text-white p-3 rounded-3xl font-semibold">{message.message}</p>
                    </div>
                )
                
            ))}
                <form className="flex p-2 w-full fixed bottom-0 border border-top">
                    <input
                        value={input}
                        onChange={e=> setInput(e.target.value)}
                        type="text" 
                        className="flex-1 outline-none"
                        placeholder="type a message"
                        />
                    <button onClick={handleSend} type='submit'>SEND</button>
                </form>
        </div>
    )
}

export default Chatscreen