import React from 'react';

const Song = (props) => (
    <div>
        <img src={props.thumbnail} alt="thumbnail" />
        <strong>{props.title}</strong>
        <span>{props.artist}</span>
    </div>
);

export default Song;