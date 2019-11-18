import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { StyledResults } from './styles';
import { Search, Song, Loader } from '../index';
import { useRouter } from '../../hooks/useRouter';

const SongResults = () => {
    const [results, setResults] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const search = router.location.state;
        axios.post('/songs', { search })
            .then(data => {
                const searchResults = data.data.response.hits;
                setResults([...searchResults]);
            })
            .catch(err => console.error('Failed', err));
    }, [router.location.state]);

    function loadSongs() {
        if (!results.length) {
            return <Loader />;
        }

        return results.map((song, idx) => {
            return (
                <Link 
                    className="song"
                    key={idx} 
                    to={`/song/${song.result.id}`}
                >
                    <Song 
                        thumbnail={song.result.song_art_image_thumbnail_url} 
                        title={song.result.title} 
                        artist={song.result.primary_artist.name} />
                </Link>
            );
        });
    }

    return (
        <StyledResults>
            <Search />
            <div className="results">
                { loadSongs() }
            </div>
        </StyledResults>
    )
}

export default SongResults;