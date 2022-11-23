import React from 'react'
import Navbar from './Navbar';
import { useState, useEffect } from 'react'
import plains from '../lined/Plains_Outlined.png'
import island from '../lined/Island_Outlined.png'
import swamp from '../lined/Swamp_Outlined.png'
import mountain from '../lined/Mountain_Outlined.png'
import forest from '../lined/Forest_Outlined.png'
import { Link, useParams } from 'react-router-dom'


function UpdateDeck() {
    const [mtgCards, setMtgCards] = useState([]);
    const [cardName, setCardName] = useState('')
    const [manaCost, setManaCost] = useState('none')
    const [imageUrl, setImageUrl] = useState('')
    const [amount, setAmount] = useState(0)
    const [cards, setCards] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [color, setColor] = useState('')
    const [name, setName] = useState('')
    const { id } = useParams();
    const [singleDeck, setSingleDeck] = useState({})

    const mtgCardAPI = `https://api.magicthegathering.io/v1/cards?gameFormat=standard&contains=imageUrl&pageSize=12&page=${page}&name=${search}&color=`
    const singleDeckAPI = `http://localhost:8000/decks/${id}`

    useEffect(() => {
        fetch(singleDeckAPI)
            .then((res) => res.json())
            .then((singleDeck) => setSingleDeck(singleDeck))
    }, []);

    useEffect(() => {
        fetch(mtgCardAPI)
            .then((res) => res.json())
            .then((mtgCards) => setMtgCards(mtgCards.cards));
    }, []);


    const pageDown = () => {
        if (page != 1) {
            setPage(page - 1)
            fetch(mtgCardAPI)
                .then((res) => res.json())
                .then((mtgCards) => setMtgCards(mtgCards.cards))
            console.log(page)
        }
    }

    const pageUp = () => {
        setPage(page + 1)
        fetch(mtgCardAPI)
            .then((res) => res.json())
            .then((mtgCards) => setMtgCards(mtgCards.cards))
    }

    const cardClick = () => {
        const newCard = { cardName, manaCost, imageUrl, amount }
        setCards([...cards, newCard]);

        for (let i = 0; i < cards.length; i++) {
            if (newCard.cardName === cards[i].cardName) {
                if (cards[i].amount < 4) {
                    cards[i].amount += 1
                    cards.splice(cards.length, 1)
                    setCards([...cards])
                } else {
                    cards.splice(cards.length, 1)
                    setCards([...cards])
                    console.log('Maximum amount of card in deck already')
                }

            }
        }
    }

    const searchSubmit = (e) => {
        e.preventDefault();
        setPage(1)
        fetch(mtgCardAPI)
            .then((res) => res.json())
            .then((mtgCards) => setMtgCards(mtgCards.cards))
    }

    const deckUpdate = (e) => {
        e.preventDefault();
        const updatedDeck = { name, cards }

        fetch(singleDeckAPI, {
            method: 'PUT',
            headers: { 'CONTENT-Type': 'application/json' },
            body: JSON.stringify(updatedDeck)
        }).then(() => {
            console.log('Deck Updated')
        })
    }

    return (
        <div className='h-full w-full flex flex-cols'>
            <div className='h-full w-1/5 border-4 border-neutral-50 rounded-xl' id='deck-cards'>
                <div className='h-28 border-b-4 border-neutral-50 rounded-xl' id='deck-title'>
                    <form className='w-full h-full grid grid-rows-3' onSubmit={deckUpdate}>
                        <label className="text-md text-neutral-50 text-center pt-1" htmlFor="deckName">Deck Name:</label>
                        <input
                            className="w-1/2 h-full text-LG text-center font-bold border border-zinc-800 px-3 rounded-lg mb-5 shadow-sm mx-auto focus:outline-none focus:border-amber-600"
                            type="text"
                            name="name"

                            onChange={(e) => setName(e.target.value)}
                            autoComplete="off"
                            required
                            defaultValue={singleDeck.name}
                        />
                        <button type='submit' className='w-1/3 h-3/5 rounded-full border-2 border-neutral-50 text-center text-neutral-50 mx-auto mt-1 pb-6'>Update Deck</button>
                    </form>
                </div>
                {cards.map((card, index) => {
                    return <div className='w-full h-8 border-2 border-neutral-50 rounded-lg text-neutral-50 my-px cursor-pointer' key={index} onClick={(e) => cards.splice(index, 1) & setCards([...cards])}>
                        <ul className='grid grid-cols-10'>
                            <li className='pl-2 text-lg'>{card.amount}x</li>
                            <li className='col-span-6 col-start-2 pl-1 border-l-2 border-neutral-200'>{card.cardName}</li>
                            <li className='col-start-8 col-span-3 text-right pr-1'>{card.manaCost}</li>
                        </ul>
                    </div>
                })}
            </div>
            <div className='h-full w-4/5' id='card-list'>
                <div className='h-1/6 w-full' id='navs'>
                    <div className='h-1/2 w-full'><Navbar /></div>
                    <ul className='h-1/2 w-full grid grid-cols-12 border-t-2 border-neutral-50'>
                        <li className='mx-auto mt-4'>
                            <span onClick={pageDown} className="material-symbols-outlined text-neutral-50 border-2 border-neutral-50 rounded-lg pl-3 pt-2 pb-2 pr-1 cursor-pointer">
                                arrow_back_ios
                            </span>
                        </li>
                        <li className='col-span-3'>
                            <form onSubmit={searchSubmit} className="mt-4 grid grid-rows-8 text-zinc-600 font-bold space-y-2">
                                <label className="text-lg" htmlFor="Search Bar"></label>
                                <input
                                    className="w-full p-1 mt-10 text-sm font-semibold border border-neutral-50 rounded-lg shadow-sm mx-auto focus:outline-none placeholder:italic placeholder:text-slate-400"
                                    type="text"
                                    name="search"
                                    placeholder='Search'
                                    autoComplete="off"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </form>
                        </li>
                        <li className='col-span-3 flex'>
                            <div>
                                <img src={plains} alt='plains-symbol' className='w-1/2 mx-auto mt-5 focus:border-2 focus:border-neutral-50 focus:rounded-full cursor-pointer' tabIndex="0" />
                            </div>
                            <div>
                                <img src={island} alt='island-symbol' className='w-1/2 mx-auto mt-5 focus:border-2 focus:border-neutral-50 focus:rounded-full cursor-pointer' tabIndex="0" />
                            </div>
                            <div>
                                <img src={swamp} alt='swamp-symbol' className='w-1/2 mx-auto mt-5 focus:border-2 focus:border-neutral-50 focus:rounded-full cursor-pointer' tabIndex="0" />
                            </div>
                            <div>
                                <img src={mountain} alt='mountain-symbol' className='w-1/2 mx-auto mt-5 focus:border-2 focus:border-neutral-50 focus:rounded-full cursor-pointer' tabIndex="0" />
                            </div>
                            <div>
                                <img src={forest} alt='forest-symbol' className='w-1/2 mx-auto mt-5 focus:border-2 focus:border-neutral-50 focus:rounded-full cursor-pointer' tabIndex="0" />
                            </div>
                        </li>
                        <li className='mx-auto pt-7 pb-5 col-start-11 text-neutral-50'>
                            <span className='w-1/3 h-1/3 border-2 border-neutral-50 rounded-xl p-2'>Page: {page}</span>
                        </li>
                        <li className='mx-auto mt-4 col-start-12'>
                            <span onClick={pageUp} className="material-symbols-outlined text-neutral-50 border-2 border-neutral-50 rounded-lg p-2 cursor-pointer">
                                arrow_forward_ios
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='h-5/6 w-full grid grid-cols-6 pt-2 mx-2' id='card-grid'>
                    {mtgCards.map((mtgCard, index) => {
                        return <div className="w-full h-fit" key={index}>
                            <ul>
                                <li className=""><img src={mtgCard.imageUrl} alt={mtgCard.cardName} className='border-2 border-sky-50 rounded-xl cursor-pointer transition ease-in-out delay-100 hover:translate-x-1 hover:-translate-y-1' onMouseOver={(e) => setCardName(mtgCard.name) & setManaCost(mtgCard.manaCost) & setImageUrl(mtgCard.imageUrl) & setAmount(1)} onClick={cardClick} /></li>
                            </ul>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default UpdateDeck;
