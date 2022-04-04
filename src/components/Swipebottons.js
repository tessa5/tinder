import { Close, Favorite, FlashOn, Replay, StarRate } from '@mui/icons-material'
import React from 'react'
import IconButton from '@mui/material/IconButton';

function Swipebottons() {
return (
    <div className="fixed bottom-10 flex justify-evenly w-full">
        <IconButton className="shadow-lg bg-white "><Replay className="p-1 text-orange-300 !important" fontSize="large"/></IconButton>
        <IconButton className="shadow-lg bg-white"><Close className="p-1 text-red-500 !important" fontSize="large"/></IconButton>
        <IconButton className="shadow-lg bg-white"><StarRate className="p-1 text-blue-400 !important" fontSize="large"/></IconButton>
        <IconButton className="shadow-lg bg-white"><Favorite className="p-1 text-green-300 !important" fontSize="large"/></IconButton>
        <IconButton className="shadow-lg bg-white"><FlashOn className="p-1 text-purple-400 !important" fontSize="large"/></IconButton>
    </div>
)
}

export default Swipebottons