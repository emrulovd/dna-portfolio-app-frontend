import classes from './Location.module.css';

const Location = () => {
  return (
    <div className={classes.Wrapper}>
      <iframe
        className={classes.Frame}
        title="google"
        src="https://snazzymaps.com/embed/325721"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default Location;