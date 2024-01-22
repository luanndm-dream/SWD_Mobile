import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/userSlice'
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware().concat(thunk)
  // },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

