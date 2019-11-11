import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Song from './Song';

const StyledSong = styled.div`
    .song {
        text-decoration: none;
    }
    button {
        text-transform: uppercase;
        outline: 0;
        background: #f55959;
        color: #FFF;
        box-shadow: 0 3px 15px rgba(200, 200, 200, 0.5);
        width: 100%;
        border: 0;
        border-radius: 4px;
        padding: 15px;
        margin-top: 15px;
        color: #FFFFFF;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
        
        &:hover, 
        &:active, 
        &:focus {
            background: #f53e3e;
        }
    }
`;

class ProfileSong extends React.Component {
    constructor(props) {
        super(props);

        this.state = { song: null }
        this.deleteFavorite = this.deleteFavorite.bind(this);
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.post(`/profile/${id}`, { id })
            .then(song => {
                if(!this.props.user) {
                    return this.props.history.push({
                        pathname: "/login"
                    });
                }
                this.setState(() => ({ song: song.data }))
            })
            .catch(err => console.error('ERROR: ', err ));
    }
    deleteFavorite() {
        const id = this.props.match.params.id;
        axios.delete(`/profile/${id}`, { params: { id } })
            .then(() => {
                return this.props.history.push({
                    pathname: "/profile"
                });
            })
            .catch(err => console.error('ERROR: ', err ));
    }
    render() {
        const song = this.state.song;
        return (
            song && 
                <StyledSong>
                    <Link className="song" to={`/songs/${song.genius_id}`}>
                        <Song 
                            thumbnail={song.album_image} 
                            title={song.title}
                            artist={song.artist} />
                    </Link>
                    <button onClick={this.deleteFavorite}>Remove Favorite</button>
                </StyledSong>
        
        )
    }
}

export default ProfileSong;