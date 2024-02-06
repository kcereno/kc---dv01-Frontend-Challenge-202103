import { configureStore } from '@reduxjs/toolkit';
import { loanDataSlice } from './features/loanData/loanDataSlice';

export const store = configureStore({
  reducer: {
    loanData: loanDataSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
