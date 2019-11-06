import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import bgImage from '../images/music.jpg';

const StyledHome = styled.div`
    background: url(${bgImage}) center center/cover no-repeat;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Home = (props) => (
    <StyledHome>
        <Search {...props}/>
    </StyledHome>
);

export default Home;