import classes from "./Services.module.css";

import Header from "./Header/Header";
import Business from "./Business/Business";
import ECommerce from "./eCommerce/ECommerce";
import WebDevelopment from "./WebDevelopment/WebDevelopment";
import MobileApp from "./MobileApp/MobileApp";
import GraphicDesign from "./GraphicDesign/GraphicDesign";

const Services = () => {
  return (
    <div className={classes.Wrapper}>
      <Header />
      <Business />
      <ECommerce />
      <WebDevelopment />
      <MobileApp />
      <GraphicDesign />
    </div>
  );
};

export default Services;
