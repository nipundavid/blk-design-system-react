import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import classnames from "classnames";
import { myProjects } from "../../Model/projects";
import { CreateProjectCards } from "../../views/dev-portfolio/ProjectCard";
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
import NavBar from "views/dev-portfolio/NavBar";
import Footer from "components/Footer/Footer.js";
import {} from "components/Footer/Footer.js";

const ProjectsPage = () => {
  const history = useHistory();

  useEffect(() => {
    document.body.classList.toggle("profile-page");
    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  }, []);

  function OpenProject() {
    history.push("/project");
  }

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="content-center">
          <section className="section"></section>
          <section className="section">
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container>
              <Row>
                {myProjects.map((project) => {
                  return (
                    <Col md="4">
                      <CreateProjectCards project={project} />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProjectsPage;
