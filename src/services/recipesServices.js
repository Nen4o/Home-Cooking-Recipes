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
    return Recipe.findByIdAndUpdate(recipeId, updateData, { runValidators: true });
}

const deleteRecipe = (recipeId) => {
    return Recipe.findByIdAndDelete(recipeId);
}

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
}