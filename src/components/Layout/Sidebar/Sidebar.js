import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/actions/auth';

import logo from "../../../assets/dna-code-white.png";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const dispatch = useDispatch();

  const exitHandler = () => {
    dispatch(logout());
  }

  return (
    <div className={classes.SideBar}>
      <div className={classes.Logo}>
        <img src={logo} alt="..." />
      </div>
      <ul className={classes.SideNav}>
        <NavLink to="/admin/dashboard">Dahsboard</NavLink>
        <NavLink to="/admin/users">Projects</NavLink>
        <NavLink to="/admin/users">Analyse</NavLink>
        <NavLink to="/admin/users">Apps</NavLink>
        <NavLink to="/admin/users">Members</NavLink>
      </ul>
      <div className={classes.Exit}>
        <NavLink to="/" onClick={exitHandler}>Exit</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
