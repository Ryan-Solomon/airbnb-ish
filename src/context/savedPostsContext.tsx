import React, {
  createContext,
  useContext,
  FC,
  ReactNode,
  useReducer,
} from 'react';
import { TPost } from '../types/appTypes';

type SavedPostsContext = {};

const initialContext: SavedPostsContext = {};

const SavedPostsContext = createContext(initialContext);

function postReducer(state, action) {
  switch (action.type) {
    case 'ADD_POST':
      return {};
    case 'REMOVE_POST':
      return {};
    case 'CLEAR_POSTS':
      return {};
    default:
      throw new Error(`Action type ${action.type} is not supported`);
  }
}

export const SavedPostsContextProvider: FC<ReactNode> = ({ children }) => {
  const [posts, setPosts] = useReducer([]);

  const;

  return (
    <SavedPostsContext.Provider value={{}}>
      {children}
    </SavedPostsContext.Provider>
  );
};

export const useSavedPostsContext = () => {
  return useContext(SavedPostsContext);
};
