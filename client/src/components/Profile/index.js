import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from '../../hooks/useRouter';
import { Song } from '../index';
import { StyledProfile } from './styles';

const Profile = () => {
    const router = useRouter();
    const auth = useAuth();

    useEffect(() => {
        axios.get('/profile')
            .then(user => {
                user.data.user ? auth.setUser(user.data) : auth.setUser(null);
            })
            .catch(err => console.log(err));
    }, [router.pathname]);

    function showSavedFavorites() {
        if (!auth.user) {
            router.history.push({
                pathname: '/auth/login'
            });
            return null;
        }

        if(!auth.user.songs.length) {
            return <p className="message">No favorites saved</p>
        }

        return auth.user.songs.map((song, idx) => (
            <Link key={idx} className="song" to={`/profile/${song.id}`}>
                <Song
                    thumbnail={song.album_image} 
                    title={song.title}
                    artist={song.artist} />
            </Link>
        ));
    }

    return (
        <StyledProfile>
            { showSavedFavorites() }
        </StyledProfile>
    )
}

export default Profile;