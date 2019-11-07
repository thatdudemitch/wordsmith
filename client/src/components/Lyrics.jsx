import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledLyrics = styled.div`
    width: 100%;
    padding-bottom: 22px;
    .bar {
        font-size: 1.6rem;
        line-height: 1.2;
    }
`;

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
            <StyledLyrics>
                {
                    this.state.result && this.state.result.split(/\r?\n/).map((verse, idx) => {
                        return (verse !== "") ? <p className="bar" key={idx}>{verse}</p> : <br />;
                    })
                }
            </StyledLyrics>
        )
    }

}

export default Lyrics;