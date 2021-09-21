import { useDispatch, useSelector } from "react-redux";
import { changeDrawerStatus } from "../../../store/actions/drawer";
import classes from "./OpenElement.module.css";

const OpenElement = (props) => {
  const isOpen = useSelector((state) => state.drawer.isOpen);
  const dispatch = useDispatch();
  const changeDrawerStatusHandler = () => {
    dispatch(changeDrawerStatus(!isOpen));
  };
  return (
    <div
      className={classes.MenuButton + " " + (isOpen && classes.MenuButtonOpen) + " " + props.className}
      onClick={changeDrawerStatusHandler}
    >
      <div className={classes.MenuButtonBurger}></div>
    </div>
  );
};

export default OpenElement;
