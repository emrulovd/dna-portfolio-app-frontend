import { createSlice } from "@reduxjs/toolkit";

const initialProjectState = {
  projects: [],
  isLoading: false,
};

const projectSlice = createSlice({
  name: "projects",
  initialState: initialProjectState,
  reducers: {
    isLoading(state) {
        state.isLoading = true;
    },
    isNotLoading(state) {
        state.isLoading = false;
    },
    getAllProjects(state, actions) {
      state.projects = actions.payload;
    },
  },
});

export const projectActions = projectSlice.actions;
export default projectSlice.reducer;
