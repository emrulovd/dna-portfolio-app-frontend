import axios from "axios";
import { projectActions } from "../slices/projects";

const URL = "http://localhost:8080/project/";
const header = { Authorization: "Bearer " + localStorage.getItem("token") };

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
      console.log(response.data);
      dispatch(projectActions.getOneProject(response.data.project));
    });
    dispatch(projectActions.isNotLoading());
  };
};

export const addProject = (projectData) => {
  return (dispatch) => {
    dispatch(projectActions.isLoading());
    axios.post(URL, projectData, { headers: header }).then((response) => {
      console.log(response.data.message);
    });
    dispatch(projectActions.isNotLoading());
  };
};

export const deleteProject = (project_id) => {
  return (dispatch) => {
    dispatch(projectActions.isLoading());
    axios
      .delete(URL + project_id, { headers: header })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error.error);
      });
  };
};

export const lazyLoading = () => {
  return (dispatch) => {
    dispatch(projectActions.isLoading());
    setTimeout(() => {
      dispatch(projectActions.isNotLoading());
    }, 500);
  };
};
