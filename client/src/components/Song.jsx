import React from 'react';

const Song = (props) => (
    <div className="song">
        <img className="song-thumbnail" src={props.thumbnail} alt="thumbnail" />
        <strong className="song-title">{props.title}</strong>
        <span className="song-artist">{props.artist}</span>
    </div>
);

export default Song;