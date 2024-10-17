const router = require('express').Router();
const recipesServices = require('../services/recipesServices');

router.get('/recipes/create', (req, res) => {
    if (!res.user) {
        res.redirect('/404');
    }

    res.render('recipes/create');
})

router.post('/recipes/create', async (req, res) => {
    const recipeData = req.body;
    const user = res.user;
    recipeData.owner = user._id;

    try {
        await recipesServices.createRecipe(recipeData);
        res.redirect('/catalog')
    } catch (err) {
        const errorMessage = Object.values(err.errors)[0]?.message;
        res.render('recipes/create', { error: errorMessage, recipeData })
    }
    console.log(recipeData);

})

router.get('/catalog', async (req, res) => {

    try {
        const recipes = await recipesServices.getAllRecipes().lean();
        res.render('recipes/catalog', { recipes })
    } catch (err) {
        console.log(err);
    }
})

router.get('/recipe/details/:recipeId', async (req, res) => {
    const recipeId = req.params.recipeId;
    const userId = res.user?._id;
    try {
        const recipe = await recipesServices.getRecipeById(recipeId).lean();
        const isOwner = userId == recipe.owner;
        const isRecommend = recipe.voteList.find(usersId => usersId == userId);
        const recommendCount = recipe.voteList.length;

        res.render('recipes/details', { recipe, isOwner, isRecommend, recommendCount })
    } catch (err) {
        console.log(err);
    }
})

router.get('/recipe/recommend/:recipeId', async (req, res) => {
    if (!res.user) {
        res.redirect('/404');
    }

    const recipeId = req.params.recipeId;

    try {
        const recipe = await recipesServices.getRecipeById(recipeId);
        recipe.voteList.push(res.user._id);

        await recipesServices.updateRecipe(recipeId, recipe);
        res.redirect('/recipe/details/' + recipeId);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;
