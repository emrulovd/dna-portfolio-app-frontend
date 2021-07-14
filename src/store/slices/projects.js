import { createSlice } from "@reduxjs/toolkit";

const initialProjectState = {
  projects: [],
  project: null,
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
    getOneProject(state, actions){
        state.project = actions.payload;
    }
  },
});

export const projectActions = projectSlice.actions;
export default projectSlice.reducer;
