// userSlice.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export interface UserInfo {
  accessToken: string;
  role?: string | undefined;
}

const initialState: UserInfo = {
  accessToken: 'sadkjhgasdhjgashj',
  role: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.accessToken = action.payload.accessToken;
      state.role = action.payload.role;
    },
  },
});

// Corrected userType
type UserType = typeof userSlice.actions.setUserInfo;

export const { setUserInfo } = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
