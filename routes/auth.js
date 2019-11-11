const router = require('express').Router();
const passport = require('../middlewares/local');
const usersController = require('../controllers/users');

router.post('/register', usersController.create);
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    redirectURI: '/profile'
  });
});
router.get('/logout', (req, res) => {
  req.logout();
  res.json({redirectURI: '/'});
});

module.exports = router;