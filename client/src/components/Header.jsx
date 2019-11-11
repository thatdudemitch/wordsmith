import React from 'react';
import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';
import Menu from './Menu';

const StyledNav = styled.nav`
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
        opacity: 0;
        max-height: 0;
        top: 80px;
        left: 0;
        z-index: 2;
        pointer-events: none;
        transition: opacity 10ms ease-out, max-height 1000ms ease-out;
        &.show {
            opacity: 1;
            margin: 0;
            padding: 22px;
            max-height: 150px;
            background: #fff;
            pointer-events: all;
            transition: opacity 300ms ease-in, height 100ms ease-in;
        }
    }
    @media(min-width:768px) {
        .nav {
            display: flex;
            align-items: center;
            position: relative;
            width: auto;
            top: 0;
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

const StyledLink = styled(Link)`
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

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu(e) {
        e.preventDefault();
        this.setState(() => ({
            isOpen: !this.state.isOpen
        }));
    }
    render() {
        return (
            <StyledNav>
                <StyledLink to="/" className="logo">Wordsmith</StyledLink>
                <Menu toggleMenu={this.toggleMenu} isOpen={this.state.isOpen} />
                {
                    !this.props.loggedIn
                    ? (
                        <ul className={`nav ${this.state.isOpen ? 'show' : ''}`}>
                            <li className="nav-item">
                                <StyledLink to="/login">Sign In</StyledLink>
                            </li>
                            <li className="nav-item">
                                <StyledLink to="/register" cta={true ? 1 : 0}>Create an account</StyledLink>
                            </li>
                        </ul>
                    )
                    : (
                        <ul className={`nav ${this.state.isOpen ? 'show' : ''}`}>
                            <li className="nav-item">
                                <StyledLink to="/profile">Profile</StyledLink>
                            </li>
                            <li className="nav-item">
                                <StyledLink to="/logout">Logout</StyledLink>
                            </li>
                        </ul>
                    )
                }
            </StyledNav>
        )
    }
}

export default Header;