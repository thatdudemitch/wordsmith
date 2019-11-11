const router = require('express').Router();
const usersController = require('../controllers/users');
const favoritesController = require('../controllers/favorites');
const auth = require('../middlewares/auth');

router.get('/', auth.loginRequired, usersController.index);
router.post('/', auth.loginRequired, favoritesController.create);

router.post('/:id', favoritesController.show);
router.delete('/:id', auth.loginRequired, favoritesController.delete);


module.exports = router;