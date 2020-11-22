import React, { useState } from "react";
import YouTube from "react-youtube";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  ListGroupItem,
  ListGroup,
  Row,
  Col,
} from "reactstrap";

export const CreateProjectCards = (props) => {
  return (
    <div>
      <Card className="card-coin card-plain" key={props.project.id}>
        <CardBody>
          <Row>
            <Col className="text-center">
              <img
                alt="..."
                className="project-thumb  img-fluid rounded-square shadow-lg"
                src={props.project.thumbImage}
              />
            </Col>
            <Col className="text-center" md="12">
              <span>
                <br />
                <h4 className="text-uppercase">{props.project.projectName}</h4>
              </span>
              <span>
                {props.project.tags.map((tag) => {
                  return <div key={tag}>{tag}</div>;
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
                {props.project.shortDescription}
              </ListGroupItem>
              <ListGroupItem className="text-center ">
                <div className="text-primary">Tech Stack :</div>
                {props.project.techStack.map((ts) => {
                  return <div key={ts}>{ts}</div>;
                })}
              </ListGroupItem>
            </ListGroup>
          </Row>
        </CardBody>
        <CardFooter className="text-center">
          <Button
            className="btn-simple"
            color="primary"
            onClick={() => props.UpdateProjectData(props.project.id)}
          >
            Show More
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
