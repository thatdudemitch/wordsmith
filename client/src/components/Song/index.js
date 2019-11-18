import React from 'react';
import { useSpring, animated } from 'react-spring';
import { StyledSong } from './styles';

const Song = props => {
    const animate = useSpring({ opacity: 1, from : { opacity: 0 } });
    return (
        <StyledSong>
            <animated.div style={animate} className="song-content">
                <img className="song-thumbnail" src={props.thumbnail} alt="thumbnail" />
                <strong className="song-title">{props.title}</strong>
                <span className="song-artist">{props.artist}</span>
            </animated.div>
        </StyledSong>
    );
}

export default Song;