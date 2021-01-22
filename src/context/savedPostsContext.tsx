import React, {
  createContext,
  useContext,
  FC,
  ReactNode,
  useReducer,
} from 'react';
import { TPost } from '../types/appTypes';

type SavedPostsContext = {
  posts: TPost[];
  addPost: (p: TPost) => void;
  removePost: (id: string) => void;
  clearPosts: () => void;
};

const initialContext: SavedPostsContext = {
  posts: [],
  addPost: (p: TPost) => null,
  removePost: (id: string) => null,
  clearPosts: () => null,
};

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
      let alreadyInState = false;
      state.posts.forEach((post) => {
        if (post.id === action.payload.id) {
          alreadyInState = true;
        }
      });
      if (alreadyInState) return { posts: [...state.posts] };
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

const initialPosts: TPostState = {
  posts: [],
};

export const SavedPostsContextProvider: FC<ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialPosts);

  const addPost = (post: TPost) => {
    dispatch({ type: 'ADD_POST', payload: post });
  };

  const removePost = (id: string) => {
    dispatch({ type: 'REMOVE_POST', payload: id });
  };

  const clearPosts = () => {
    dispatch({ type: 'CLEAR_POSTS' });
  };

  return (
    <SavedPostsContext.Provider
      value={{
        posts: state.posts,
        addPost,
        removePost,
        clearPosts,
      }}
    >
      {children}
    </SavedPostsContext.Provider>
  );
};

export const useSavedPostsContext = () => {
  return useContext(SavedPostsContext);
};
