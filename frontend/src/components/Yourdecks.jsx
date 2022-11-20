import React from 'react'

function Yourdecks() {
    return (
        <div className='h-full w-full border-2 border-gray-50'>
            <div className='h-1/6 w-full border-2 border-sky-400' id='your-decks-nav'></div>
            <div className='h-5/6 w-full border-2 border-red-400' id='your-decks'></div>
        </div>
    )
}

export default Yourdecks;