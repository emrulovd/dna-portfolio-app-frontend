import { Container, Row, Col } from "react-bootstrap";
import classes from "./ProjectFilter.module.css";

import { inputData } from "./FilterData";
import Input from "../../../UI/Input/Input";

const ProjectFilter = (props) => {
  const onFilterHandler = (event) => {
    props.filterHandler(event.target.value);
  };

  return (
    <div className={classes.Wrapper}>
      <Container>
        <Row>
          {inputData.map((input_item, index) => {
            return (
              <Col key={index}>
                <Input
                  elementType={input_item.elementType}
                  className={classes.InputImage}
                  inputType={input_item.elementType}
                  imageSrc={input_item.imageSrc}
                  name={input_item.value}
                  value={input_item.value}
                  onClick={onFilterHandler}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectFilter;
