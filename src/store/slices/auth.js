import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    authenticate(state) {
      // Need to complete the authenticate method/reducer
      state.isAuthenticated = true;
    },
    deauthenticate(state) {
      // Need to complete the deauthenticate method/reducer
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
