
// import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
// import authSlice from './slices/authSlice';


// const store = configureStore({
//     reducer: {
//         // posts: postsReducer,
//         // staffmembers: staffMemberSlice
//         authMembers: authSlice
//     }
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

import { configureStore, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setAutoFreeze } from "immer";
import { useDispatch } from "react-redux";
import { ThunkAction } from "redux-thunk";
import rootReducer, { RootState } from "../redux/rootReducer";
const middleware = [...getDefaultMiddleware()];
// const middleware = [...getDefaultMiddleware()];

setAutoFreeze(false);
const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;

