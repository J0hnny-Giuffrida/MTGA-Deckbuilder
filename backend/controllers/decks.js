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
    .catch((err) => {
        res.status(400).json({
            message: 'No deck with that ID exists'
        })
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

//UPDATE A DECK
router.put('/:id', (req, res) => {
    db.Deck.findByIdAndUpdate(req.params.id, req.body)
        .then((updatedDeck) => {
            res.status(200).json(updatedDeck)
        })

        .catch((err) => {
            res.status(400).json({
                message: 'An error occured, the deck could not be updated'
            })
        })
})

//DELETE A DECK
router.delete('/:id', (req, res) => {
    db.Deck.findByIdAndDelete(req.params.id).then(res.status(300))
})

module.exports = router;