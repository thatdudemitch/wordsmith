import React from 'react';
import styled, { css } from 'styled-components';

const StyledLogout = styled.div`
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;

    input {
        outline: 0;
        background: #f2f2f2;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
    }

    .ctas {
        display: flex;
    }

    .message {
        margin: 15px 0;
        color: #b3b3b3;
        font-size: 12px;
    }
`;

const StyledButton = styled.button`
    text-transform: uppercase;
    outline: 0;
    background: #949eff;
    color: #FFF;
    box-shadow: 0 3px 15px rgba(200, 200, 200, 0.5);
    border: 0;
    border-radius: 4px;
    margin: 0 11px;
    padding: 15px 30px;
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

    ${props => props.warn && css`
        background: #f55959;
        &:hover, 
        &:active, 
        &:focus {
            background: #f53e3e;
        }
    `}
`;

const Logout = (props) => (
    <StyledLogout>
        <p className="message">Are you sure you want to log out?</p>
        <div className="ctas">
            <StyledButton onClick={() => {
                props.handleLogout(false, props)
            }}>Cancel</StyledButton>
            <StyledButton warn onClick={() =>{
                props.handleLogout(true, props)
            }}>Log Out</StyledButton>
        </div>
    </StyledLogout>
);

export default Logout;