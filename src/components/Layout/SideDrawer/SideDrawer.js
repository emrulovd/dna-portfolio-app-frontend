import { useSelector } from "react-redux";
import classes from "./SideDrawer.module.css";

const SideDrawer = () => {
    const isOpen = useSelector(state => state.drawer.isOpen);
    return (
    <div className={isOpen && classes.SideDrawer}>
      <ul className={classes.NavigationItems}>
        <li><a href='/'>Home</a></li>
        <li><a href='/services'>Services</a></li>
        <li><a href='/'>About</a></li>
        <li><a href='/'>Portfolio</a></li>
        <li><a href='/'>Contact</a></li>
        <li><a href='/'>Careers</a></li>
      </ul>
    </div>
  );
};

export default SideDrawer;
