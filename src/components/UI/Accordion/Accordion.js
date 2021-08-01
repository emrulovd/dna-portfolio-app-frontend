import { useState } from 'react';

import classes from "./Accordion.module.css";

const Accordion = (props) => {
  const [toggle, setToggle ] = useState(false);
  
  const onToggleHandler = () => {
      if(!toggle){
        setToggle(true);
      }else{
        setToggle(false);
      }
  }

  return (
    <div className={classes.Accordion}>
      <div className={toggle ? classes.ContentBox + classes.Active : classes.ContentBox }>
        <div className={ toggle ? classes.LabelWrapperactive : classes.LabelWrapper} onClick={onToggleHandler}>
          <h4 className={classes.Label}>{props.label}</h4>
        </div>
        <div className={toggle ? classes.ContentActive : classes.Content}>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
