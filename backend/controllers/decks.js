const router = require('express').Router();

//GET ALL YOUR DECKS
router.get('/', (req, res) => {
    res.send('You have reached the Route for Your Decks')
});

module.exports = router;