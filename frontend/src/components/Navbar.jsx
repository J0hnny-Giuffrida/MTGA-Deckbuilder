import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='h-1/6 w-full border-2 border-sky-400' id='your-decks-nav'>
            <ul className='grid grid-cols-12 text-lg text-center py-14 text-neutral-50'>
                <Link to="/" className='hover:text-amber-700'>
                    <li>Home</li>
                </Link>
                <Link to="/yourdecks" className='hover:text-amber-700'>
                    <li>Your Decks</li>
                </Link>
                <Link to="/deck-builder" className='hover:text-amber-700'>
                    <li>Deck Builder</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;