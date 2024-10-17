const mongoose = require('mongoose');
const User = require('./User');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
    },
    ingredients: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 200,
    },
    instructions: {
        type: String,
        required: true,
        minLength: 10,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?:\/\//,
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 100,
    },
    voteList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;