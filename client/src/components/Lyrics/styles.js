import styled from 'styled-components';

export const StyledLyrics = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        min-height: 75vh;
        width: 100%;
    }
    .bar {
        font-size: 1.6rem;
        line-height: 1.5;
        margin: 20px 0;
}
    }
    .song-content {
        background: #E8E8E5;
        background-size: cover;
        border-radius: 15px;
        padding: 22px;
        margin: 22px 22px 22px 0;
    }
    .song-thumbnail {
        width: 100%;
    }
    .song-title {
        margin: 0;
    }
    .favorite {
        text-transform: uppercase;
        outline: 0;
        background: #949eff;
        color: #FFF;
        box-shadow: 0 3px 15px rgba(200, 200, 200, 0.5);
        width: 100%;
        border: 0;
        border-radius: 4px;
        padding: 15px;
        color: #FFFFFF;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
        
        &:hover, 
        &:active, 
        &:focus {
            background: #3A49E0;
        }

        &:disabled {
            color: #aaa;
            background: #ddd;
            &:hover {
                background: #ddd; 
            }
        }
    }
    @media(min-width: 768px) {
        .song-thumbnail {
            width: 300px;
        }
    }
    @media(min-width:1025px) {
        .lyrics-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            flex-shrink: 0;
        }
        .favorite {
            margin-top: 44px;
            order: 2;
        }
        .song-content {
            height: 500px;
        }
        .lyrics {
            display: flex;
            justify-content: center;
            height: 525px;
            order: 1;
            > div {
                overflow-y: scroll;
            }
        }
    }
`;
