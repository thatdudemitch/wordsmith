import React, { useState, createContext, useContext, useEffect } from 'react';

const MenuContext = createContext();

export const ProvideMenuState = ({children}) => {
    const menuToggle = useMenuState();
    return <MenuContext.Provider value={menuToggle}>{children}</MenuContext.Provider>;
}

export const useMenu = () => {
    return useContext(MenuContext);
};

function useMenuState() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 768) {
            setMenuOpen(true);
        }
    }, [isMenuOpen]);

    return  {
        isMenuOpen,
        setMenuOpen
    }
}