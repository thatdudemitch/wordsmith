const Song = require('../models/song');

const favoritesController = {};

favoritesController.show = (req, res) => {
  Song.findById(req.body.id)
    .then(song => res.json(song))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

favoritesController.create = (req, res) => {
  Song.create({
    genius_id: req.body.genius_id,
    title: req.body.title,
    artist: req.body.artist,
    album_image: req.body.album,
    user: req.user,
  }, req.user.id).then(() => {
    res.json('Song saved');
  }).catch(err => {
    res.status(500).json(err);
  });
};

favoritesController.delete = (req, res) => {
  Song.destroy(req.params.id)
    .then(() => {
      res.json('Song deleted');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = favoritesController;