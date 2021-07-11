import React from 'react'; 

import classes from './Input.module.css';

const Input = props => {
    let inputElement = null; 

    switch( props.elementType ){
        case ('input'):
            inputElement = <input
                className={`${classes.InputElement} ${props.className}`}
                type={props.inputType}
                name={props.name}
                value={props.value}
                onChange={props.change}
                required/>;
                break;
        case ('textarea'):
            inputElement = <textarea 
                className={`${classes.TextElement} ${props.className}`}
                type={props.inputType}
                name={props.name}
                value={props.value}
                onChange={props.change}
                required/>;
                break;
        default:
            inputElement = <input
            className={`${classes.InputElement} ${props.className}`}
            type={props.inputType}
            name={props.name}
            value={props.value}
            onChange={props.change}
            required/>;
            break;
    }

    return(
        <div className={ props.elementType === 'input' ? classes.Input : classes.Textarea}>
            {inputElement}
            <span className={classes.Label}>{props.label}</span>
            <span className={classes.Line}></span>
        </div> 
    )
}

export default Input;