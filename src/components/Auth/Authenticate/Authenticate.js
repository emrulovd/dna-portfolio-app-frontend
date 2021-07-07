import React, { useRef } from "react";

import logo from "../../../assets/dna-code-white.png";
import classes from "./Authenticate.module.css";

import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const Authenticate = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();


  const authenticateHandler = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className={classes.Wrapper}>
      <Card>
        <img className={classes.Logo} src={logo} alt=".." />
        <form onSubmit={authenticateHandler}>
          <Input
            elementType="input"
            name="username"
            inputRef={usernameInputRef}
            label="username"
            inputType="text"
          />
          <Input
            elementType="input"
            name="password"
            inputRef={passwordInputRef}
            label="password"
            inputType="password"
          />
          <Button buttonType="submit" >Login</Button>
        </form>
      </Card>
    </div>
  );
};

export default Authenticate;
