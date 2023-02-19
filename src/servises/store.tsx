import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './redusers/index';


export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch