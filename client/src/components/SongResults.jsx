import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Song from './Song';

class SongResults extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        }
    }
    componentDidMount() {
        const searchQuery = this.props.location.state;
        console.log(searchQuery);
        axios.post('/songs', searchQuery)
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
    render() {
        return (
            <div>
               {
                   this.state.results.map((song, idx) => {
                       console.log(this.state.results);
                       return (
                            <Link key={idx} to={`/songs/${song.result.id}`}>
                                <Song 
                                    thumbnail={song.result.song_art_image_url} 
                                    title={song.result.title}
                                    artist={song.result.primary_artist.name} />
                            </Link>
                       );
                   })
               }
            </div>
        );
    }
}

export default SongResults;