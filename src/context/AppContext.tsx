import React, { createContext, FC, ReactNode, useContext } from 'react';

const AppContext = createContext({});

export const ContextProvider: FC<ReactNode> = ({ children }) => {
  const appContext = {};
  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
