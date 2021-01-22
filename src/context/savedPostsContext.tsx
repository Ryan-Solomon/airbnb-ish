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

type TPostAction =
  | {
      type: 'ADD_POST';
      payload: TPost;
    }
  | {
      type: 'REMOVE_POST';
      payload: string;
    }
  | {
      type: 'CLEAR_POSTS';
    };

type TPostState = {
  posts: TPost[];
};

function postReducer(state: TPostState, action: TPostAction) {
  switch (action.type) {
    case 'ADD_POST':
      return { posts: [...state.posts, action.payload] };
    case 'REMOVE_POST':
      return {
        posts: [...state.posts.filter((post) => post.id !== action.payload)],
      };
    case 'CLEAR_POSTS':
      return { posts: [] };
    default:
      //   @ts-ignore
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
