import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from 'react';

type TContext = {
  guests: number;
  setGuests: React.Dispatch<React.SetStateAction<number>>;
};

const initialContext: TContext = {
  guests: 0,
  setGuests: () => null,
};

const AppContext = createContext(initialContext);

export const ContextProvider: FC<ReactNode> = ({ children }) => {
  const [guests, setGuests] = useState(0);

  const appContext = { guests, setGuests };
  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
