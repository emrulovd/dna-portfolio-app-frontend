import classes from './NotFound.module.css';

const NotFound = () => {
  return(
    <div className={classes.Wrapper}>
        <h2 className={classes.ErrorTitle}>Page Not Found</h2>
        <h4 className={classes.ErrorStatus}>404</h4>
    </div>
  );
};

export default NotFound;
