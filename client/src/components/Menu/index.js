import React, { useRef, useEffect } from 'react';
import { useMenu } from '../../hooks/useMenu';
import { StyledMenu } from './styles';

const Menu = () => {
    const menuToggle = useMenu();
    const menuRef = useRef();

    useEffect(() => {
        const menu = menuRef.current;
        
        function handleMenuOpen(e) {
            if (e.target.className !== 'hamburger-inner' && menuToggle.isMenuOpen) {
                menu.classList.remove('open');
                menuToggle.setMenuOpen(false);
            }
        }

        if (menuToggle.isMenuOpen) { 
            menu.classList.add('open');
        }

        document.addEventListener('click', handleMenuOpen);
        
        
        return () => {
            menu.classList.remove('open')
            document.removeEventListener('click', handleMenuOpen);
        }
    }, [menuToggle]);

    return (
        <StyledMenu>
            <div className="menu" onClick={() => menuToggle.setMenuOpen(!menuToggle.isMenuOpen)}>
                <div id="menu-button" className="hamburger" ref={menuRef}>
                    <div className="hamburger-inner"></div>
                </div>  
            </div>
        </StyledMenu>
    )
}

export default Menu;