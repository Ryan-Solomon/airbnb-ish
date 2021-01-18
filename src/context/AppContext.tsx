import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from 'react';

type TContext = {
  guests: number;
  addGuest: () => void;
  removeGuest: () => void;
};

const initialContext: TContext = {
  guests: 0,
  addGuest: () => null,
  removeGuest: () => null,
};

const AppContext = createContext(initialContext);

export const ContextProvider: FC<ReactNode> = ({ children }) => {
  const [guests, setGuests] = useState(0);

  const addGuest = () => {
    setGuests((g) => g + 1);
  };

  const removeGuest = () => {
    setGuests((g) => Math.max(0, g - 1));
  };

  const appContext = { guests, addGuest, removeGuest };
  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
