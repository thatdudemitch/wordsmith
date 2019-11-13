import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Search from './Search';
import Song from './Song';
import Loader from './Loader';

const StyledResults = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .results {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        min-height: 100vh;
        width: 100%;
    }
    .song {
        width: 100%;
        text-decoration: none;
        margin-bottom: 22px;
        text-align: center;
        opacity: 0;
        transition: 200ms opacity ease-in;
        &.loaded {
            opacity: 1;
        }
    }

    @media(min-width:768px) {
        .song {
            width: 50%;
        }   
    }

    @media(min-width:1025px) {
        .song {
            width: 33%;
        }   
    }
`;
class SongResults extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        }
        this.loadSongs = this.loadSongs.bind(this);
    }
    componentDidMount() { 
        axios.post('/songs', { search: this.props.searchQuery })
            .then(data => this.setState(() => {
                const searchResults = data.data.response.hits;
                    return {
                        results: searchResults.map(result => {
                            return result;
                        })
                    }
                }
            ))
            .catch(err => console.error('Failed', err));
    }

    componentDidUpdate() {
        axios.post('/songs', { search: this.props.searchQuery })
        .then(data => {
            const searchResults = data.data.response.hits;
            if(!this.state.results || this.state.results[0].result.id !== searchResults[0].result.id) {
                this.setState(() => ({
                    results: searchResults.map(result => {
                        return result;
                    })
                }))
            }
        })
        .catch(err => console.error('Failed', err));
    }

    loadSongs() {
        if (!this.state.results.length) {
            return <Loader />;
        }

        return this.state.results.map((song, idx) => {
            return (
                <Link className={`song ${this.state.results.length && 'loaded'}`} key={idx} to={`/song/${song.result.id}`}>
                    <Song 
                        thumbnail={song.result.song_art_image_url} 
                        title={song.result.title}
                        artist={song.result.primary_artist.name} />
                </Link>
            );
        });
    }

    render() {
        console.log('component updated')
        return (
            <StyledResults>
                <Search {...this.props} handleSearchSubmit={this.props.handleSearchSubmit} />
                <div className={`results`}>
                    {this.loadSongs()}
                </div>
            </StyledResults>
        );
    }
}

export default SongResults;