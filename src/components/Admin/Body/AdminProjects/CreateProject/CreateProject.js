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
    { name: "None", value: "none" },
    { name: "Web Development", value: "web development" },
    { name: "Mobile App Development", value: "mobile app development" },
    { name: "Bussines Development", value: "bussines development" },
    { name: "Graphic Design", value: "graphic design" },
  ];

  const emptyValidator = () => {
    if (
      enteredTitle.trim().length === 0 &&
      enteredDescription.trim().length === 0
    ) {
      return false;
    }
    return true;
  };

  const reformTehnologies = () => {
    const reformedTechnology = enteredTechnologies.trim().split(", ");
    return reformedTechnology;
  };

  const createProjectFormHandler = (event) => {
    event.preventDefault();
    if (!emptyValidator()) {
      return;
    }
    const reformedTechnologies = reformTehnologies();
    let formData = new FormData();
    formData.append("title", enteredTitle);
    formData.append("type", enteredType);
    formData.append("technologies", reformedTechnologies);
    formData.append("description", enteredDescription);
    console.log(enteredImages);
    for (const key of Object.keys(enteredImages)) {
      formData.append("projectImageCollection", enteredImages[key]);
    }
    for(var pair of formData.entries()) {
      console.log(pair[0]+ ', '+ pair[1]);
   }
    dispatch(addProject(formData));
  };

  const enteredTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const enteredTypeHandler = (event) => {
    setEnteredType(event.target.value);
  };

  const enteredImageHandler = (event) => {
    setEnteredImages(event.target.files);
  };

  const enteredTechnologiesHandler = (event) => {
    setEnteredTechnologies(event.target.value);
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
          elementType="select"
          name="elementType"
          change={enteredTypeHandler}
          options={projectTypeOptions}
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
        <Input
          elementType="input"
          name="technologies"
          label="Technologies"
          inputType="text"
          value={enteredTechnologies}
          change={enteredTechnologiesHandler}
        />
        <Button className={classes.Button} buttonType="submit">
          Create
        </Button>
      </form>
    </Card>
  );
};

export default CreateProject;
