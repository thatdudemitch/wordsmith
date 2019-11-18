import React from 'react';
import { animated, useTransition } from 'react-spring';
import { StyledNav, StyledLink } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { ProvideMenuState, useMenu } from '../../hooks/useMenu';
import { Menu } from '../index';

const HeaderContainer = () => {
    const auth = useAuth();
    const menuToggle = useMenu();

    const transitions = useTransition(menuToggle.isMenuOpen, null, {
        from: { opacity: 0 },
        enter: { opacity: 1},
        leave: { opacity: 0 },
    });

    function setNav() {
        if (window.innerWidth < 767) {
            return !auth.user ? (  
                transitions.map(({ item, key, props }) => item && 
                    <animated.ul key={key} className="nav" style={props}>
                        <li className="nav-item">
                            <StyledLink to="/auth/login">Sign In</StyledLink>
                        </li>
                        <li className="nav-item">
                            <StyledLink to="/auth/register" cta={true ? 1 : 0}>Create an account</StyledLink>
                        </li>
                    </animated.ul>
            )) : (
                transitions.map(({ item, key, props }) => item &&
                    <animated.ul key={key} className="nav" style={props}>
                        <li className="nav-item">
                            <StyledLink to="/profile">Profile</StyledLink>
                        </li>
                        <li className="nav-item">
                            <StyledLink to="/auth/logout">Logout</StyledLink>
                        </li>
                    </animated.ul>
            ))
        }
        return !auth.user ? (  
            <ul className="nav">
                <li className="nav-item">
                    <StyledLink to="/auth/login">Sign In</StyledLink>
                </li>
                <li className="nav-item">
                    <StyledLink to="/auth/register" cta={true ? 1 : 0}>Create an account</StyledLink>
                </li>
            </ul>
        ) : (
            <ul className="nav">
                <li className="nav-item">
                    <StyledLink to="/profile">Profile</StyledLink>
                </li>
                <li className="nav-item">
                    <StyledLink to="/auth/logout">Logout</StyledLink>
                </li>
            </ul>
        )
    }
    return (
        <StyledNav>
            <StyledLink to="/" className="logo">Wordsmith</StyledLink>
            <Menu />
            { setNav() }
        </StyledNav>
    )
}

const Header = () => {
    return (
        <ProvideMenuState>
            <HeaderContainer />
        </ProvideMenuState>
    )
}

export default Header;