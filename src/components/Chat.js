import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Chat({name, message, timestamp, profilePic}) {
    return (
        <Link to={`/chat/${name}`}>
            <div className="flex items-center justify-between p-3 border border-gray-100">
                <Avatar className="shadow-lg" alt={name} src={profilePic} />
                <div className="flex-1 ml-4">
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="text-gray-400">{message}</p>
                </div>
                <p className="text-xs text-gray-300">{timestamp}</p>
            </div>
        </Link>
    )
    }
