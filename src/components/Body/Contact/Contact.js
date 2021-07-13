import classes from "./Contact.module.css";

import ContactForm from "./ContactForm/ContactForm";
import Location from "./Location/Location";

const Contact = () => {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Row}>
        <div className={classes.Col}>
          <ContactForm />
        </div>
        <div className={classes.Col}>
          <Location />
        </div>
      </div>
    </div>
  );
};

export default Contact;
