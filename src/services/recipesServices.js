const Recipe = require('../models/Recipes');

const createRecipe = (recipeData) => {
    return Recipe.create(recipeData);
}

const getAllRecipes = () => {
    return Recipe.find();
}

const getRecipeById = (recipeId) => {
    return Recipe.findById(recipeId);
}

const updateRecipe = (recipeId, updateData) => {
    return Recipe.findByIdAndUpdate(recipeId, updateData);
}

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
}