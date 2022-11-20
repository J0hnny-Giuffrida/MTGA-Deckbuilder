import React from 'react'

function DeckBuilder() {
    return (
        <div className='h-full w-full border-2 border-gray-50 flex flex-cols'>
            <div className='h-full w-1/5 border-2 border-sky-400' id='deck-cards'></div>
            <div className='h-full w-4/5 border-2 border-red-400' id='card-list'></div>
        </div>
    )
}

export default DeckBuilder;
