import React from 'react';
import axios from 'axios';

class Lyrics extends React.Component {
    constructor(props) {
        super(props);

        this.state = { result: null }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.post(`/songs/${id}`, { id })
            .then(song => {
                this.setState(() => ({
                    result: song.data.lyrics
                }))
            })
            .catch(err => console.log('Error', err));
    }

    render() {
        return (
            <div>
                {
                    this.state.result && this.state.result.split(/\r?\n/).map((verse, idx) => {
                        return (verse !== "") ? <p key={idx}>{verse}</p> : <br />;
                    })
                }
            </div>
        )
    }

}

export default Lyrics;