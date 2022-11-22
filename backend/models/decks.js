const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
    name: { type: String, required: true },
    colors: [{ 
        type: String,
        enum: ['W', 'R', 'U', 'B', 'G', 'N'],
     }],
     cards: [{ 
        name: String,
        manaCost: String, //Need to figure out colorless mana and multiple colored mana of the same type
        imageUrl: String,
        amount: Number
    }],
})

const Deck = mongoose.model('Deck', deckSchema)
module.exports = Deck


//Deck Schema
//---Deck's User
//---Deck Name
//---Deck Colors
//---Cards in deck
//------Name
//------Cost
//------Img Url
//------Amount in Deck (4 max)