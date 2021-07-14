import axios from "axios";
import { projectActions } from "../slices/projects";

const URL = "http://localhost:8080/project/";

export const fetchAllProjects = () => {
  return (dispatch) => {
    dispatch(projectActions.isLoading());
    axios.get(URL).then((response) => {
      dispatch(projectActions.getAllProjects(response.data.projects));
    });
    dispatch(projectActions.isNotLoading());
  };
};

export const fetchByIdProject = (id) => {
  return (dispatch) => {
    dispatch(projectActions.isLoading());
    axios.get(URL + id).then((response) => {
      dispatch(projectActions.getOneProject(response.data.project));
    });
    dispatch(projectActions.isNotLoading());
  };
};
