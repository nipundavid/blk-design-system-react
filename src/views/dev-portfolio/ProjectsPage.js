import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import classnames from "classnames";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
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
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col className="offset-lg-0 offset-md-3" lg="4" md="6">
                  <Card className="card-register">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("assets/img/square-purple-1.png")}
                      />
                      <CardTitle tag="h4">Register</CardTitle>
                    </CardHeader>
                    <CardBody></CardBody>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="primary"
                        size="lg"
                        onClick={OpenProject}
                      >
                        Show More
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
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
