import { Container, Row, Col } from "react-bootstrap";
import classes from "./ProjectFilter.module.css";

import { inputData } from "./FilterData";
import Input from "../../../UI/Input/Input";

import rightArrow from "../../../../assets/filter/arrow-right.png";
import leftArrow from "../../../../assets/filter/arrow-left.png";

const ProjectFilter = (props) => {
  const onFilterHandler = (event) => {
    props.filterHandler(event.target.value);
  };

  return (
    <div className={classes.Wrapper}>
      <Container>
        <Row className={classes.RowWrapper}>
          <img
            className={classes.Arrow}
            src={leftArrow}
            alt="Displaying an openning html tag as icon"
          />
          {inputData.map((input_item, index) => {
            return (
              <Col md={1} key={index}>
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
          <img
            className={classes.Arrow}
            src={rightArrow}
            alt="Displaying an closing html tag as icon"
          />
        </Row>
      </Container>
    </div>
  );
};

export default ProjectFilter;
