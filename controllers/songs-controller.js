const axios = require('axios');
const Lyricist = require('lyricist');
require('dotenv').config();

const lyricist = new Lyricist(process.env.API_KEY);
const songsController = {};

songsController.show = (req, res) => {
  const searchQuery = req.body.search;
  axios.get(`https://api.genius.com/search?access_token=${process.env.API_KEY}&q=${searchQuery}`)
    .then(response => res.json(response.data))
    .catch(err => res.status(400).json(`Error ${err}`));
}

songsController.showOne = async (req, res) => {
  const id = req.body.id;
  const song = await lyricist.song(id, { fetchLyrics: true })
  
  await axios.get(`https://api.genius.com/songs/${id}/?access_token=${process.env.API_KEY}`)
  .then(_ => res.json(song))
  .catch(err => res.status(400).json(`Error ${err}`));
}

module.exports = songsController;