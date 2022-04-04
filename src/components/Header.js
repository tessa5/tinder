import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';

import { Link, useNavigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material';


function Header({backButton}) {
    const navigate = useNavigate();


    return (
        <div className="md:container md:mx-auto mx-px mt-1 flex justify-between items-center">
            {backButton ? (
                <IconButton onClick={() => navigate('/', {replace: true})}>
                    <ArrowBack fontSize="large"/>
                </IconButton>
            ):(
                <IconButton>
                <PersonIcon fontSize='large'/>
            </IconButton>
            )}
            
            <Link to='/'>
                <img className='w-24'
                    src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-700x394.png" 
                    alt="tinder logo"/>
            </Link>
            <Link to='/chat'>
                <IconButton>
                    <ForumIcon fontSize='large'/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header