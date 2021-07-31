import { useHistory } from "react-router-dom";

import classes from "./ProjectContact.module.css";
import Button from "../../../../UI/Button/Button";

const ProjectContact = () => {
  const history = useHistory();

  const navigateToContactHandler = () => {
    history.push("/contact");
  };
  return (
    <div className={classes.Wrapper}>
      <h3 className={classes.Text}>If you're looking for something similiar</h3>
      <Button
        className={classes.Button}
        buttonTheme={"white"}
        onClick={navigateToContactHandler}
      >
        Contact us
      </Button>
    </div>
  );
};

export default ProjectContact;
