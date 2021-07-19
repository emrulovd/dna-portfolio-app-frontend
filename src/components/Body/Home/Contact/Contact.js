import { useHistory } from "react-router";

import classes from './Contact.module.css';

import Button from '../../../UI/Button/Button';

const Contact = () => {
    const history = useHistory();

    const navigateToContactHandler = () => {
        history.push('/contact');
    } 

    return(
       <div className={classes.Wrapper} >
           <h3 className={classes.Title}>You have an idea, we will make it happen</h3>
           <Button className={classes.Button} buttonTheme="white" onClick={navigateToContactHandler}>Contact us</Button>
       </div>
    )
}

export default Contact;