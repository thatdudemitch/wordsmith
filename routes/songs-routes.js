const express = require('express');
const songsRouter = express.Router();

const songsHelper = require('../services/songs/songs-helpers');
const songsController = require('../controllers/songs-controller');

songsRouter.get('/', songsHelper.getResults, songsController.index);
songsRouter.get('/:id', songsHelper.getSingle, songsController.show);

module.exports = songsRouter;