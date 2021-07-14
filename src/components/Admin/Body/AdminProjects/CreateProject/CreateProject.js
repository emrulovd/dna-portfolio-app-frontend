import { useState } from "react";

import Card from "../../../../UI/Card/Card";
import Input from "../../../../UI/Input/Input";
import Button from "../../../../UI/Button/Button";

import classes from "./CreateProject.module.css";

const CreateProject = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredImages, setEnteredImages] = useState(null);
  const [enteredDescription, setEnteredDescription] = useState("");
  // To do
  // const [enteredTechnologies, setEnteredTechnologies] = useState("");

  const emptyValidator = () => {
    if (
      enteredTitle.trim().length === 0 &&
      enteredDescription.trim().length === 0
    ) {
      return false;
    }
    return true;
  };

  const createProjectFormHandler = (event) => {
    event.preventDefault();
    if (!emptyValidator()) {
      return;
    }
    console.log(enteredImages)
    let formData = new FormData();
    formData.append('title', enteredTitle);
    formData.append('description', enteredDescription);
    for (const key of Object.keys(enteredImages)) {
      formData.append("projectImageCollection", enteredImages[key]);
    }
  };

  const enteredTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const enteredImageHandler = (event) => {
    setEnteredImages(event.target.files);
  };

  const enteredDescriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  return (
    <Card className={classes.Card}>
      <form onSubmit={createProjectFormHandler}>
        <Input
          elementType="input"
          name="title"
          label="Project Title"
          inputType="text"
          value={enteredTitle}
          change={enteredTitleHandler}
        />
        <input
          type="file"
          name="image"
          multiple
          onChange={enteredImageHandler}
        />
        <Input
          elementType="textarea"
          name="description"
          label="Project Description"
          inputType="text"
          value={enteredDescription}
          change={enteredDescriptionHandler}
        />
        <Button className={classes.Button} buttonType="submit">
          Create
        </Button>
      </form>
    </Card>
  );
};

export default CreateProject;
