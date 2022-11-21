import React from 'react'
import { useState, useEffect } from 'react'
let deckCards = [];

function DeckBuilder() {
    const [cards, setCards] = useState([]);
    const [name, setName] = useState('')
    const [manaCost, setManaCost] = useState('none')
    const [imageUrl, setImageUrl] = useState('')


    useEffect(() => {
        const mtgCardAPI = 'https://api.magicthegathering.io/v1/cards?gameFormat=standard&contains=imageUrl&pageSize=12&page=1'
        fetch(mtgCardAPI)
            .then((res) => res.json())
            .then((cards) => setCards(cards.cards));
    }, []);

    const cardClick = () => {
        const newDeckCard = { name, manaCost, imageUrl }
        deckCards.push(newDeckCard)
        console.log(deckCards)
    }

    return (
        <div className='h-full w-full border-2 border-gray-50 flex flex-cols'>
            <div className='h-full w-1/5 border-2 border-sky-400' id='deck-cards'>
                <div className='h-28 border-2 border-orange-400' id='deck-title'></div>
                {deckCards.map((deckCard, index) => {
                    return <div className='w-full h-8 border-2 border-neutral-50 rounded-lg text-neutral-50 my-px' key={index} >
                        <ul className='flex flex-cols'>
                            <li>{deckCard.name}</li>
                            <li>{deckCard.manaCost}</li>
                        </ul>
                    </div>
                })}
            </div>
            <div className='h-full w-4/5 border-2 border-red-400' id='card-list'>
                <div className='h-1/6 w-full border-2 border-purple-400' id='card-nav'></div>
                <div className='h-5/6 w-full grid grid-cols-6 pt-2 mx-2' id='card-grid'>
                    {cards.map((card, index) => {
                        return <div className="w-full h-fit" key={index}>
                            <ul>
                                <li className=""><img src={card.imageUrl} alt={card.name} className='border-2 border-sky-50 rounded-xl cursor-pointer transition ease-in-out delay-100 hover:translate-x-1 hover:-translate-y-1' onMouseOver={(e) => setName(card.name) & setManaCost(card.manaCost) & setImageUrl(card.imageUrl)} onClick={cardClick} /></li>
                            </ul>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default DeckBuilder;
