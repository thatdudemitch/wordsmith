import styled from 'styled-components';

export const StyledSong = styled.div`
    .song-thumbnail {
        width: 300px;
        height: 300px;
        border-radius: 5px;
        box-shadow: 2px 2px 30px rgba(103,103,103,0.35);
        margin-bottom: 8px;
    }
    .song-title {
        display: block;
        font-size: 1.5rem;
        max-width: 300px;
        margin: 5px auto;
        color: #1a1a1a;
    }
    .song-artist {
        font-size: 1.2rem;
        color: #1a1a1a;
    }
`;