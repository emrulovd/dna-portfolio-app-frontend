import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.SideBar}>
      <div className={classes.Logo}>DNA</div>
      <ul>
        <NavLink to="/admin/dashboard">Dahsboard</NavLink>
        <NavLink to="/admin/users">Users</NavLink>
        <NavLink to="/admin/dogs">Dogs</NavLink>
      </ul>
      <div className={classes.Exit}>
        <NavLink to="/">back to home</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
