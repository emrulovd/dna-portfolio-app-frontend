import classes from './Contact.module.css'

import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className={classes.Wrapper}>
      <ContactForm />
    </div>
  );
};

export default Contact;
