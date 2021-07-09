import React, { useState } from "react";

import { Row, Col } from "react-bootstrap";
import Card from "../../../UI/Card/Card";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";

import logo from '../../../../assets/dna-code-white.png'
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <Card className={classes.Card}>
        <img className={classes.Logo} src={logo} alt='...'/>
      <form>
        <Row>
          <Col>
            <Input
              elementType="input"
              name="name"
              label="Your Name"
              inputType="text"
              className={classes.Input}
            />
          </Col>
          <Col>
            <Input
              elementType="input"
              name="number"
              label="Your Telephone Number"
              inputType="text"
              className={classes.Input}
            />
          </Col>
        </Row>
        <Input
          elementType="input"
          name="email"
          label="Your Email"
          inputType="email"
          className={classes.Input}
        />
        <Input 
            elementType="textarea"
            name="message"
            label="Your Message"
            inputType="text"
        />
        <Button className={classes.Button}>Send</Button>
      </form>
    </Card>
  );
};

export default ContactForm;
