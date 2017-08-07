# Wordsmith
[Wordsmith Repo](https://github.com/thatdudemitch/wordsmith)
[Wordsmith Heroku](https://evening-coast-89238.herokuapp.com)

## Wireframes and Mockup
![Image](https://github.com/thatdudemitch/wordsmith/blob/master/README_images/wireframe1.png)

![Image](https://github.com/thatdudemitch/wordsmith/blob/master/README_images/wireframe2.png)

![Image](https://github.com/thatdudemitch/wordsmith/blob/master/README_images/song-results-page.png)

## What is Wordsmith?

> Wordsmith is a elegant lyrics based website from most of your favorite artists around the globe. The lyrics are powered by Genius.

## Technical Discussion

> Full stack application using Node JS / Express / Postgres backend. Used NPM module lyricist to scrape lyrics from Genius. Used Genius API to gather artist, song and image metadata. Pug was used for the view engine. I also used jQuery for simple DOM manipulation.

### Notes on App Structure

> Created two helper functions to grab the lyrics from my npm module (getLyrics)  based off of the id of my getSingle function. Made them async functions since   I was using the new await javascript keyword.
``` js
async function getLyrics(id) {
  const song = await lyricist.song(id, { 
    fetchLyrics: true,
    textFormat: 'html',
  });
  return song.lyrics;
}

async function getSingle(req, res, next) {
  let id = req.query.id;
  res.locals.lyrics = await getLyrics(id);
  fetch(`http://api.genius.com/songs/${id}/?access_token=${process.env.API_KEY}`)
  .then(fetchRes => fetchRes.json())
  .then(jsonRes => {
    // console.log('JSON RES', jsonRes)
    res.locals.single = jsonRes.response;
    return next();
  }).catch(err => {
    console.log(err);
    return next();
  });
}
```

## Opportunities for Future Growth

> I would love to add lyrics on the users favorites on the next version.
> Add a some page transitions and other smooth DOM animations
> Mobile friendly design
> A little cleaner astethic 

## Instructions

1. Clone or download the repository (by clicking the green button)
2. Inside your terminal, cd into the root folder of the application
3. Run npm install to install the dependencies
4. Request a genius api key and place it in the song-helper file (where is says process.env.API_KEY) in the services folder.
5. npm run dev and type localhost:8080 to run application
