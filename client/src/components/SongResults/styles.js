import styled from 'styled-components';

export const StyledResults = styled.div`
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
        transition: 200ms opacity ease-in;
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