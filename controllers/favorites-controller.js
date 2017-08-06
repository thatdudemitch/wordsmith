const Song = require('../models/song');

const favoritesController = {};

favoritesController.show = (req, res) => {
  Song.findById(req.params.id)
    .then(song => {
      res.render('songs/user-song-single', {
        currentPage: 'show',
        message: 'ok',
        data: song,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

favoritesController.create = (req, res) => {
  Song.create({
    genius_id: req.body.genius,
    title: req.body.title,
    artist: req.body.artist,
    album_image: req.body.album,
    user: req.user,
  }, req.user.id).then(() => {
    res.redirect('/user');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

favoritesController.update = (req, res) => {
  Song.update({
    title: req.body.title,
    artist: req.body.artist,
  }, req.params.id).then(song => {
    res.redirect(`/user/${req.params.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

favoritesController.edit = (req, res) => {
  Song.findById(req.params.id)
    .then(song => {
      res.render('song/user-song-edit', {
        currentPage: 'edit',
        data: song,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

favoritesController.delete = (req, res) => {
  Song.destroy(req.params.id)
    .then(() => {
      res.redirect('/user');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = favoritesController;