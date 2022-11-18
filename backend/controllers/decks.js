const router = require('express').Router();
const db = require('../models')

//GET ALL YOUR DECKS
router.get('/', async (req, res) => {
    const decks = await db.Deck.find()
    res.json(decks)
})

//GET ONE OF YOUR DECKS
router.get('/:id', (req, res) => {
    db.Deck.findOne({ _id: req.params.id }).then((foundDecks) => {
        res.json(foundDecks)
    })
})

//CREATE A DECK
router.post('/', (req, res) => {
    db.Deck.create(req.body)
        .then((createDeck) => {
            res.status(200).json(createDeck);
        })

        .catch((err) => {
            res.status(400).json({
                message: 'An Error occured, project could not be created'
            })
        })
})

module.exports = router;