import styled from 'styled-components';

export const StyledSong = styled.div`
    .song {
        text-decoration: none;
    }
    button {
        text-transform: uppercase;
        outline: 0;
        background: #f55959;
        color: #FFF;
        box-shadow: 0 3px 15px rgba(200, 200, 200, 0.5);
        width: 100%;
        border: 0;
        border-radius: 4px;
        padding: 15px;
        margin-top: 15px;
        color: #FFFFFF;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
        
        &:hover, 
        &:active, 
        &:focus {
            background: #f53e3e;
        }
    }
`;