import React from 'react'
import Navbar from './Navbar';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Yourdecks() {
    const [decks, setDecks] = useState([])

    useEffect(() => {
        const deckAPI = `http://localhost:8000/decks`
        fetch(deckAPI)
            .then((res) => res.json())
            .then((decks) => setDecks(decks));
    }, []);

    return (
        <div className='h-full w-full border-2 border-gray-50'>
            <div className='h-1/6 w-full border-2 border-sky-400'>
                <Navbar />
            </div>
            <div className='h-5/6 w-full border-2 border-red-400 grid grid-cols-5 gap-x-6' id='your-decks'>
                {decks.map((deck, index) => {
                    return <div key={index} className='w-full h-1/4 border-2 border-neutral-50 mt-5 ml-5'>
                        <Link to={`/decks/${deck._id}`}>
                            <ul>
                                <li className='text-2xl text-neutral-50 text-center mx-auto pt-20'>{deck.name}</li>
                            </ul>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Yourdecks;