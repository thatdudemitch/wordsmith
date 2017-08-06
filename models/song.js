const db = require('../db/config');

const Song = {};

Song.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM songs
    WHERE id = $1
  `, [id]);
}

Song.create = (song, userid) => {
  return db.one(`
    INSERT INTO songs
    (genius_id, title, artist, album_image, user_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [song.genius_id, song.title, song.artist, song.album_image, userid]);
}

Song.update = (song, id) => {
  return db.one(`
    UPDATE song SET
    title = $1,
    artist = $2
    WHERE id = $3
    RETURNING *
  `, [song.title, song.artist, id]);
}

Song.destroy = (id) => {
  return db.none(`
    DELETE FROM songs
    WHERE id = $1
  `, [id]);
}

module.exports = Song;