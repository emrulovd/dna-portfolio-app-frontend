import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    authenticate(state, actions) {
      state.token = actions.payload.token;
      state.isAuthenticated = true;
    },
    deauthenticate(state) {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
