import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`
    .menu {
        position: absolute;
        top: 25px;
        right: 35px;
    }

    .hamburger {
        display: block;
        width: 30px;
        height: 40px;
        z-index: 2;
    }

    .hamburger-inner { 
        display: block;
        width: 40px;
        height: 6px; 
        margin-top: calc(6px * 2);
        background: #1a1a1a;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        
        &::before, &::after { 
            display: block; 
            position: absolute; 
            content: "";
            z-index: -1;
            width: 40px; 
            height: 6px; 
            background: #1a1a1a;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out; 
        }

        &::before {
            top: 0;
        }

        &::after {
            top: calc(6px * 4);
        }
    }

    // Clicked State
    .open {
        .hamburger-inner {
            background: none;

            &::before, &::after {
                top: calc(6px * 2); 
            }

            &::before {
                -webkit-transform: rotate(-45deg); 
                -ms-transform: rotate(-45deg); 
                transform: rotate(-45deg);
            }
            &::after {
                -webkit-transform: rotate(45deg); 
                -ms-transform: rotate(45deg); 
                transform: rotate(45deg);
            }
        } 
    }

    @media(min-width:768px) {
        .menu {
            display: none;
        }
    }
`

const Menu = (props) => (
    <StyledMenu>
        <div class="menu" onClick={props.toggleMenu}>
            <div id="menu-button" class={`hamburger ${props.isOpen ? 'open' : 'close'}`}>
                <div class="hamburger-inner"></div>
            </div>  
        </div>
    </StyledMenu>
)

export default Menu;