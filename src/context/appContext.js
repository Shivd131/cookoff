import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredOnSmall, setIsHoveredOnSmall] = useState(false);
  const [innerHeight, setInnerHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const size = isHovered ? 400 : isHoveredOnSmall ? 150 : 40;

  const contextValues = {
    isHovered,
    setIsHovered,
    isHoveredOnSmall,
    setIsHoveredOnSmall,
    innerHeight,
    setInnerHeight,
    scrollPosition,
    setScrollPosition,
    size,
  };

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
