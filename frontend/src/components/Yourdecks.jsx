import React from 'react'
import Navbar from './Navbar';

function Yourdecks() {
    return (
        <div className='h-full w-full border-2 border-gray-50'>
            <Navbar />
            <div className='h-5/6 w-full border-2 border-red-400' id='your-decks'></div>
        </div>
    )
}

export default Yourdecks;