const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const recipesController = require('./controllers/recipesController');

router.use(homeController);
router.use(authController);
router.use(recipesController);

router.all('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;