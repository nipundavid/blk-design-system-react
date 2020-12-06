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
  CardHeader,
} from "reactstrap";

export const BlogCard = (props) => {
  return (
    <div>
      <Card className="card-coin card-plain" key={props.blog.id}>
        <CardBody>
          <Row>
            <Col className="text-center">
              <img
                alt="..."
                className="project-thumb  img-fluid rounded-square shadow-lg"
                src={props.blog.thumbnail}
              />
            </Col>
            <Col className="text-center" md="12">
              <span>
                <br />
                <h4 className="text-capitalize">{props.blog.title}</h4>
              </span>
              <span>
                {/* {props.blog.categories.map((category, index) => {
                  return <div key={index}>{category}</div>;
                })} */}
              </span>
              <hr className="line-primary" />
            </Col>
          </Row>
          <Row>
            <ListGroup>
              <ListGroupItem className="text-center">
                {" "}
                <div className="text-primary">About: </div>
                {/* {props.blog.content} */}
                {ShortenText(ToText(props.blog.content), 0, 120) + "..."}
              </ListGroupItem>
              <ListGroupItem className="text-center ">
                <div className="text-danger">
                  Published : {GetDate(props.blog.pubDate)}
                </div>
              </ListGroupItem>
            </ListGroup>
          </Row>
        </CardBody>
        <CardFooter className="text-center">
          <Button
            className="btn-simple"
            color="primary"
            // onClick={() => props.UpdateProjectData(props.project.id)}
            href={props.blog.guid}
            target="_blank"
          >
            Show More
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

function ShortenText(text, startingPoint, maxLength) {
  return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
}

function ToText(node) {
  let tag = document.createElement("div");
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}
function GetDate(pubDate) {
  const monthShortname = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const splitDate = pubDate.split(" ");
  const date = splitDate[0];
  const splitMonth = date.split("-");
  const finalDate =
    monthShortname[Number(splitMonth[1] - 1)] +
    " " +
    splitMonth[2] +
    "," +
    " " +
    splitMonth[0];
  return finalDate;
}
