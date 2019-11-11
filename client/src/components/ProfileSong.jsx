import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Song from './Song';


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
                <div>
                    <Link className="song" to={`/songs/${song.genius_id}`}>
                        <Song 
                            thumbnail={song.album_image} 
                            title={song.title}
                            artist={song.artist} />
                    </Link>
                    <button onClick={this.deleteFavorite}>Remove Favorite</button>
                </div>
        
        )
    }
}

export default ProfileSong;