import { drawerActions } from "../slices/drawer";


export const changeDrawerStatus = (status) => {
  return (dispatch) => {
    dispatch(drawerActions.changeDrawerStatus(status));
  };
};