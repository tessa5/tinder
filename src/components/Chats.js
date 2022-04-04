import React from 'react'
import Chat from './Chat'

function Chats() {
    return (
        <div>
            <Chat
                name='patrick'
                message='haha, I like your style'
                timestamp='40 seconds ago'
                profilePic='https://mb.com.ph/wp-content/uploads/2020/08/patrick.png'
            />
            <Chat
                name='Sandy'
                message='haha, I like your style'
                timestamp='40 seconds ago'
                profilePic='https://www.seekpng.com/png/detail/109-1094900_incredible-best-collection-pics-of-spongebob-characters-sandy.png'
            />
            <Chat
                name='Squidward'
                message='haha, I like your style'
                timestamp='40 seconds ago'
                profilePic='https://i1.sndcdn.com/artworks-000678026908-rco789-t500x500.jpg'
            />
            <Chat
                name='Larry'
                message='haha, I like your style'
                timestamp='40 seconds ago'
                profilePic='https://pbs.twimg.com/profile_images/628591022621245440/QqTGKcwT_400x400.jpg'
            />
            <Chat
                name='Spongebob'
                message='haha, I like your style'
                timestamp='40 seconds ago'
                profilePic='https://i.pinimg.com/originals/87/64/ce/8764cefa9f88169972a8a20f2a69e8ce.jpg'
            />
        </div>
    )
}

export default Chats