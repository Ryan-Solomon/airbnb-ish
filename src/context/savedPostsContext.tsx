import React, {
  createContext,
  useReducer,
  useContext,
  FC,
  ReactNode,
} from 'react';

type SavedPostsContext = {};

const initialContext: SavedPostsContext = {};

const SavedPostsContext = createContext(initialContext);

export const SavedPostsContextProvider: FC<ReactNode> = ({ children }) => {
  return (
    <SavedPostsContext.Provider value={{}}>
      {children}
    </SavedPostsContext.Provider>
  );
};

export const useSavedPostsContext = () => {
  return useContext(SavedPostsContext);
};
