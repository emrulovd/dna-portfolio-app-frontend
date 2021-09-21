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
    getOneProject(state, actions) {
      state.project = actions.payload;
    },
    addProject(state, actions){
      let updatedProjects = state.projects;
      updatedProjects.push(actions.payload);
      state.projects = updatedProjects;
    },
    deleteProject(state, actions){
      const updatedProjects = state.projects.filter(project => project._id !== actions.payload);
      state.projects = updatedProjects;
    }
  },
});

export const projectActions = projectSlice.actions;
export default projectSlice.reducer;
