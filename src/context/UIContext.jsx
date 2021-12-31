import React, { createContext, useState } from 'react';

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const handleBurgerMenu = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <UIContext.Provider value={{ burgerMenu, handleBurgerMenu }}>
      {children}
    </UIContext.Provider>
  );
};
