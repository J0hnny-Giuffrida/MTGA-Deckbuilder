const db = require('../models')

db.Deck.create([
    {
        name: 'Tester Deck',
        colors: ['White', 'Black', 'Blue'],
        cards: [
            {
                name: 'Sheoldred, the Apocalypse',
                manaCost: '{2}{B}{B}',
                imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=574587&type=card',
                amount: 1
            },
            {
                name: 'Tenacious Underdog',
                manaCost: '{1}{B}',
                imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=555298&type=card',
                amount: 1
            }
        ]
    },
])
    
    .then(() => {
        console.log('Success!');
    })

    .catch((err) => {
        console.log('Failure!');
        process.exit();
    })