import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    .logo {
        font-size: 2.5rem;
        letter-spacing: 0.1rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #1a1a1a;
        text-decoration: none;
    }
    .nav {
        list-style-type: none;
        display: block;
        position: absolute;
        width: 100%;
        background: #fff;
        top: 80px;
        left: 0;
        margin: 0;
        padding: 22px;
        z-index: 2;
    }
    @media(min-width:768px) {
        .nav {
            display: flex;
            align-items: center;
            position: relative;
            width: auto;
            top: 0;
            right: 0;
            opacity: 1;
            pointer-events: all;
            .nav-item {
                &:first-child {
                    margin-right: 20px;
                }
            }
        }
    }
`;

export const StyledLink = styled(Link)`
    font-size: 1.6rem;
    color: #1a1a1a;
    text-decoration: none;
    display: inline-block;
    padding: 11px 11px 11px 0;
    text-transform: uppercase;
    ${props => 
        props.cta && css`
            background: #949eff;
            color: #FFF;
            box-shadow: 0 3px 15px rgba(200, 200, 200, 0.5);
            border-radius: 4px;
            padding: 10px;
        `}
`;

