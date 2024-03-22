// userSlice.ts
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
// import { RootState } from "redux/store";

export interface UserInfo {
  token: string | undefined;
  role: string | undefined;
  roleDescription: string | undefined;
  name: string | undefined;
  phoneNumber: string | undefined;
  identity: string | undefined;
}

const initialState: UserInfo = {
  //token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJzdGFmZjFAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiU3RhZmYiLCJleHAiOjE3NDAyMDM3MTksImlzcyI6ImJ1c2RlbGl2ZXJ5LWF1dGgtYXBpIiwiYXVkIjoiYnVzZGVsaXZlcnktY2xpZW50In0.lCo_zLaOpRLinbowy5z02ozSr9GBkwRcsEDcYhh7kPM",
  token: undefined,
  role: undefined,
  roleDescription: undefined,
  name: undefined,
  phoneNumber: undefined,
  identity: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.roleDescription = action.payload.token;
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
      state.identity = action.payload.identity;
    },
    resetUserInfo: (state) => {
      // Reset all user info to initial state
      Object.assign(state, initialState);
    },
  },
});

// Corrected userType
type UserType = typeof userSlice.actions.setUserInfo;

export const {setUserInfo,resetUserInfo} = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
