import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from '../../hooks/useRouter';
import { Song, Loader } from '../index';
import { StyledSong } from './styles';

const ProfileSong = () => {
    const [song, setSong] = useState(null);
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {      
        if (!auth.user) {
            router.history.push({
                pathname: '/auth/login'
            });
        }  

        const id = router.match.params.id;
        axios.post(`/profile/${id}`, { id })
            .then(song => {
                setSong(song.data);
            })
            .catch(err => console.error('ERROR: ', err ));
    }, []);
    
    function deleteFavorite() {
        console.log('delete');
        const id = router.match.params.id;
        axios.delete(`/profile/${id}`, { params: { id } })
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
            <div className="song">
                <Link className="song" to={`/song/${song.genius_id}`}>
                    <Song 
                        thumbnail={song.album_image} 
                        title={song.title}
                        artist={song.artist} />
                </Link>
                <button onClick={deleteFavorite}>Remove Favorite</button>
            </div>
        ) 
    }
    
    return (
        <StyledSong>
            { loadSong() }
        </StyledSong>
    );
}

export default ProfileSong;