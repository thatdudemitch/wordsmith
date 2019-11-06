const router = require('express').Router();
const passport = require('../middlewares/local');
const usersController = require('../controllers/users');
// const authHelpers = require('../middlewares/auth');

router.post('/register', usersController.create);
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ 
    redirectURI: "/profile", 
    flashMessage: "You are now logged in." });
});
router.get('/logout', (req, res) => {
  req.logout();
  res.json({redirectURI: '/'});
});

module.exports = router;