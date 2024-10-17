const router = require('express').Router();
const recipesServices = require('../services/recipesServices');

router.get('/', async (req, res) => {
    try {
        let recipes = await recipesServices.getAllRecipes().lean();
        recipes = recipes.splice(0, 3);
        res.render('home/home', { recipes })
    } catch (err) {
        console.log(err);
    }
})

router.get('/404', (req, res) => {
    res.render('404');
})

module.exports = router;