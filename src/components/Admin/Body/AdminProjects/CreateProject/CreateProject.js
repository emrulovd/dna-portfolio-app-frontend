import { useState } from "react";
import { useDispatch } from "react-redux";

import { addProject } from "../../../../../store/actions/projects";

import Card from "../../../../UI/Card/Card";
import Input from "../../../../UI/Input/Input";
import Button from "../../../../UI/Button/Button";

import classes from "./CreateProject.module.css";

const CreateProject = () => {
  const dispatch = useDispatch();
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredImages, setEnteredImages] = useState(null);
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredType, setEnteredType] = useState("");
  const [enteredTechnologies, setEnteredTechnologies] = useState("");

  const projectTypeOptions = [
    {name: 'Web Development', value: 'web development'},
    {name: 'Mobile App Development', value: 'mobile app development'},
    {name: 'Bussines Development', value: 'bussines development'},
    {name: 'Graphic Design', value: 'graphic design'},
  ]

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
    let formData = new FormData();
    formData.append("title", enteredTitle);
    formData.append("description", enteredDescription);
    for (const key of Object.keys(enteredImages)) {
      formData.append("projectImageCollection", enteredImages[key]);
    }
    dispatch(addProject(formData));
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
        <Input 
          elmentType="select"
          name="elementType"
          options={projectTypeOptions}/>
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
