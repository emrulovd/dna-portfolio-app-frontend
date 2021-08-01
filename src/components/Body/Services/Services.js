import classes from "./Services.module.css";

import Header from "./Header/Header";
import Business from "./Business/Business";

const Services = () => {
  return (
    <div className={classes.Wrapper}>
      <Header />
      <Business />
    </div>
  );
};

export default Services;
