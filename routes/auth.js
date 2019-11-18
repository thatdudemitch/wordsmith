const router = require('express').Router();
const passport = require('../middlewares/local');
const usersController = require('../controllers/users');

router.post('/register', usersController.create);
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json("Authenticated");
});
router.get('/logout', (req, res) => {
  req.logout();
  res.json('You are now logged out!');
});

module.exports = router;