import { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  fetchAllProjects,
  addProject,
  updateProject,
} from "../../../../../store/actions/projects";

import Card from "../../../../UI/Card/Card";
import Input from "../../../../UI/Input/Input";
import Button from "../../../../UI/Button/Button";

import classes from "./CreateProject.module.css";

const CreateProject = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [updateMode, setUpdateMode] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredImages, setEnteredImages] = useState(null);
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDetailsDescription, setEnteredDetailsDescription] = useState("");
  const [enteredProjectDescription, setEnteredProjectDescription] = useState("");
  const [enteredType, setEnteredType] = useState("");
  const [enteredTechnologies, setEnteredTechnologies] = useState("");
  const [enteredFeatures, setFeatures] = useState([
    {
      featureName: "",
      featureDescription: "",
    },
  ]);

  const projectTypeOptions = [
    { name: "None", value: "none" },
    { name: "Web Development", value: "web development" },
    { name: "Mobile App Development", value: "mobile app development" },
    { name: "Bussines Development", value: "bussines development" },
    { name: "Graphic Design", value: "graphic design" },
  ];

  useEffect(() => {
    const project_id = history.location.search.split("?q=").join("");
    if (project_id) {
      const project = props.projects.filter(
        (project) => project._id === project_id
      );
      setUpdateMode(true);
      setEnteredTitle(project[0].project_title);
      setEnteredImages(project[0].project_image_collection);
      setEnteredDescription(project[0].project_description);
      setEnteredDetailsDescription(project[0].project_details_description);
      setEnteredProjectDescription(project[0].project_project_description);
      setEnteredType(project[0].project_type);
      setEnteredTechnologies(project[0].project_technologies);
      setFeatures([...enteredFeatures, project[0].project_features]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, props.projects]);

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
    formData.append("detailsDescription", enteredDetailsDescription);
    formData.append("projectDescription", enteredProjectDescription);
    for (const key of Object.keys(enteredFeatures)) {
      formData.append("features", JSON.stringify(enteredFeatures[key]));
    }
    for (const key of Object.keys(enteredImages)) {
      formData.append("projectImageCollection", enteredImages[key]);
    }
    if (updateMode) {
      const project_id = history.location.search.split("?q=").join("");
      dispatch(updateProject(formData, project_id));
      setTimeout(() => {
        dispatch(fetchAllProjects());
      }, 500);
    } else {
      dispatch(addProject(formData));
    }
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

  const enteredDetailsDescriptionHandler = (event) => {
    setEnteredDetailsDescription(event.target.value);
  };

  const enteredProjectDescriptionHandler = (event) => {
    setEnteredProjectDescription(event.target.value);
  };

  const enteredFeaturesNameHandler = (event, index) => {
    let newFeatureForm = [...enteredFeatures];
    newFeatureForm[index][event.target.name] = event.target.value;
    setFeatures(newFeatureForm);
  };

  const enteredFeaturesDescriptionHandler = (event, index) => {
    let newFeatureForm = [...enteredFeatures];
    newFeatureForm[index][event.target.name] = event.target.value;
    setFeatures(newFeatureForm);
  };

  const addFeatureHandler = () => {
    setFeatures([
      ...enteredFeatures,
      {
        featureName: "",
        featureDescription: "",
      },
    ]);
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
          label="Description"
          inputType="text"
          value={enteredDescription}
          change={enteredDescriptionHandler}
        />
        <Input
          elementType="textarea"
          name="description"
          label="Project Details Description"
          inputType="text"
          value={enteredDetailsDescription}
          change={enteredDetailsDescriptionHandler}
        />
        <Input
          elementType="textarea"
          name="description"
          label="Project Description"
          inputType="text"
          value={enteredProjectDescription}
          change={enteredProjectDescriptionHandler}
        />
        <Input
          elementType="input"
          name="technologies"
          label="Technologies"
          inputType="text"
          value={enteredTechnologies}
          change={enteredTechnologiesHandler}
        />
        <h4>Project Features</h4>
        {enteredFeatures.map((feature, index) => {
          return (
            <Fragment key={index}>
              <Input
                elementType="input"
                name="featureName"
                label="Feature Title"
                inputType="text"
                value={feature.featureName}
                change={(event) => enteredFeaturesNameHandler(event, index)}
              />
              <Input
                elementType="textarea"
                name="featureDescription"
                label="Feature Description"
                inputType="text"
                value={feature.featureDescription}
                change={(event) =>
                  enteredFeaturesDescriptionHandler(event, index)
                }
              />
            </Fragment>
          );
        })}
        <button onClick={() => addFeatureHandler()} type="button">
          Add Feature
        </button>
        <Button className={classes.Button} buttonType="submit">
          Create
        </Button>
      </form>
    </Card>
  );
};

export default CreateProject;
