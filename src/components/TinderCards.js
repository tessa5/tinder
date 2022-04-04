import React, { useEffect, useState } from 'react'
import db from './firebase'
import TinderCard from 'react-tinder-card'
import Swipebottons from './Swipebottons'



function TinderCards() {
    const[people, setPeople] =useState([])

    useEffect(() => {
        db
        .collection('people')
        .onSnapshot((snapshot) => 
            setPeople(snapshot.docs.map((doc) => doc.data()))
        )
    }, [])

    return (
        <div>
            <div className="flex justify-center mt-6">
            {people.map((person) => (
                <TinderCard
                    className='swipe absolute'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})`}}
                    className="card relative w-96 max-w-auto h-96 p-8 rounded-xl bg-cover bg-center shadow-lg">
                        <h3 className="absolute bottom-10 text-xl font-bold ">{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
        <Swipebottons />
        </div>
    )
}

export default TinderCards