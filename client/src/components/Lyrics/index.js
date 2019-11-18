import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from '../../hooks/useRouter';
import { Search, Song, Loader } from '../index';
import { StyledLyrics } from './styles';

const Lyrics = () => {
    const [song, setSong] = useState(null);
    const [isFavorited, setFavorite] = useState(false);
    const router = useRouter();
    const auth = useAuth();
    const animate = useSpring({ opacity: 1, from : { opacity: 0 } });

    console.log(auth.user);

    useEffect(() => {      
        console.log('in use effect')  
        const id = router.match.params.id;
        axios.post(`/songs/${id}`, { id })
            .then(song => {
                setSong(song);
            })
            .catch(err => console.error('ERROR: ', err ));
        checkIfFavorited(id);
    }, []);

    function checkIfFavorited(id) {
        if (auth.user) {
            for (let userSong of auth.user.songs) {
                if (userSong.genius_id === id) {
                    setFavorite(true);
                    return true;
                }
            }
        }
    }

    function favoriteSong() {
        const favorite = {
            genius_id: song.data.id,
            title: song.data.title,
            artist: song.data.primary_artist.name,
            album: song.data.song_art_image_url
        }
        
        if(!auth.user) {
            router.history.push({
                pathname: "/login",
                state: { prevPath: `/song/${router.match.params.id}` }
            });
            return;
        }

        axios.post('/profile', favorite)
        .then(() => {
            router.history.push({
                pathname: "/profile"
            });
        })
        .catch(err => console.error('ERROR: ', err ));
    }

    function loadSong() {
        if (!song) {
            return <Loader />;
        }
        return (
            <div className="lyrics-container">
                <button onClick={favoriteSong} disabled={isFavorited} className="favorite">Favorite Song</button>
                <div className="lyrics">
                <Song 
                        thumbnail={song.data.song_art_image_thumbnail_url} 
                        title={song.data.title} 
                        artist={song.data.primary_artist.name} />
                    <div>
                        {song.data.lyrics.split(/\r?\n/).map((verse, idx) => {
                            return (verse !== "") ? <p className="bar" key={idx}>{verse}</p> : <br key={idx}/>
                        })}
                    </div>
                </div>
            </div>
        ) 
    }
    
    return (
        <StyledLyrics>
            <Search />
            <animated.div style={animate}>
                { loadSong() }
            </animated.div>
        </StyledLyrics>
    )
}

export default Lyrics;