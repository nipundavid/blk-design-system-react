import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export const CreateProjectCards = ({ project }) => {
  return (
    <div>
      <Card className="card-coin card-plain">
        <CardBody>
          <Row>
            <Col className="text-center">
              <img
                alt="..."
                className="img-center  img-fluid rounded-square shadow-lg"
                src={require("assets/img/mike.png")}
              />
            </Col>
            <Col className="text-center" md="12">
              <span>
                <br />
                <h4 className="text-uppercase">{project.projectName}</h4>
              </span>
              <span>
                {project.tags.map((tag) => {
                  return <div>{tag}</div>;
                })}
              </span>
              <hr className="line-primary" />
            </Col>
          </Row>
          <Row>
            <ListGroup>
              <ListGroupItem className="text-center">
                {" "}
                <div className="text-primary">About: </div>
                {project.shortDescription}
              </ListGroupItem>
              <ListGroupItem className="text-center ">
                <div className="text-primary">Tech Stack :</div>
                {project.techStack.map((ts) => {
                  return <div>{ts}</div>;
                })}
              </ListGroupItem>
            </ListGroup>
          </Row>
        </CardBody>
        <CardFooter className="text-center">
          <Button className="btn-simple" color="primary">
            Show More
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
