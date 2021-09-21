import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Row, Col, ListGroup } from "react-bootstrap";

import { deleteProject } from "../../../../../../store/actions/projects";

import classes from "./ProjectsListItem.module.css";

const ProjectsListItem = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const updateProjectDetailsHandler = (project_id) => {
    history.push(`/admin/projects/edit?q=${project_id}`);
  };

  const deleteProjectHandler = () => {
    dispatch(deleteProject(props.project_id));
  };
  return (
    <ListGroup.Item>
      <Row>
        <Col md={3}>
          <img
            className={classes.Image}
            src={props.project_image}
            alt="the first asset of each project"
          />
        </Col>
        <Col md={3}>
          <h4 className={classes.Title}>{props.project_title}</h4>
        </Col>
        <Col>
          <button
            className={ classes.Button + " " + classes.ButtonUpdate}
            onClick={(event) => updateProjectDetailsHandler(props.project_id)}
          >
            Update
          </button>
        </Col>
        <Col>
          <button
            className={classes.Button + " " + classes.ButtonDelete}
            onClick={deleteProjectHandler}
          >
            Delete
          </button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default ProjectsListItem;
