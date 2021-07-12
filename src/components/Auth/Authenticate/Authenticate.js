import React, { useState } from "react";

import logo from "../../../assets/dna-code-white.png";
import classes from "./Authenticate.module.css";

import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const Authenticate = () => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');


  const authenticateHandler = (event) => {
    event.preventDefault();

    if(enteredUsername.trim() === '' && enteredPassword.trim() === ''){
        return;
    }

    setEnteredUsername('');
    setEnteredPassword('');
  };

  const enteredUsernameHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  }

  return (
    <div className={classes.Wrapper}>
      <Card className={classes.Card}>
        <img className={classes.Logo} src={logo} alt=".." />
        <form onSubmit={authenticateHandler}>
          <Input
            elementType="input"
            name="username"
            label="username"
            inputType="text"
            value={enteredUsername}
            change={enteredUsernameHandler}
          />
          <Input
            elementType="input"
            name="password"
            label="password"
            inputType="password"
            value={enteredPassword}
            change={enteredPasswordHandler}
          />
          <Button buttonType="submit" className={classes.Button}>Login</Button>
        </form>
      </Card>
    </div>
  );
};

export default Authenticate;
