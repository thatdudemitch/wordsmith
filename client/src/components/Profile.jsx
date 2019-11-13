import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Song from './Song';

const StyledProfile = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    .song {
        text-decoration: none;
    }
    .message {
        font-size: 2.2rem;
    }
`;
class Profile extends React.Component {
    constructor() {
        super();

        this.showSavedFavorites = this.showSavedFavorites.bind(this);
    }
    componentDidMount() {
        axios.get('/profile')
            .then(res => {
                if(!res.data.user) {
                    return this.props.history.push({
                        pathname: "/login"
                    });
                }
                this.props.setUser(res);
            })
            .catch(err => console.error('ERROR: ', err )); 
    }
    showSavedFavorites() {
        if(!this.props.songs.length) {
            return <p className="message">No favorites saved</p>
        }

        return this.props.songs.map((song, idx) => (
            <Link key={idx} className="song" to={`/profile/${song.id}`}>
                <Song
                    thumbnail={song.album_image} 
                    title={song.title}
                    artist={song.artist} />
            </Link>
        ))
    }
    render() {
        return (
            <StyledProfile>
               {this.showSavedFavorites()}
            </StyledProfile>
        )
    }
}

export default Profile;