const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

const usersController = {};

usersController.index = (req, res) => {
  User.findUserSongs(req.user.id)
  .then(songs => {
      res.json({
        user: { id: req.user.id, username: req.user.username },
        songs: songs,
    });
  })
  .catch(err => res.status(400).json("Error", err));
}

usersController.create = async (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
 
  await User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
  })
  .then(user => {
    req.login(user, err => {
      if (err) return;
      return res.json({ 
        redirectURI: '/profile',
        loggedIn: true 
      });
    });
  })
  .catch(err => res.status(400).json("Error", err));
}

module.exports = usersController;