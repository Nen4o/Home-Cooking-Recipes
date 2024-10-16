const mongoose = require('mongoose');
const User = require('./User');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    voteList: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Recipe = mongoose.model('Volcano', recipeSchema);

module.exports = Recipe;