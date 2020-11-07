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
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardBody>
                      <Row></Row>
                      <Row>
                        <Col>
                          <img
                            alt="..."
                            className="img-center  img-fluid rounded-square shadow-lg"
                            src={require("assets/img/mike.png")}
                          />
                        </Col>
                        <Col className="text-center" md="12">
                          <span>
                            <br />
                            <h4 className="text-uppercase">Light Coin</h4>
                          </span>
                          <span>Plan</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>
                            safdhslidfhsbsvbs asdfsafg asdfksadfglsiugh akljfha
                            aifba sia avvbahvsdvigvsad asjdv ksdvsakv isa
                            sadvsluv5 3svsvjo
                          </ListGroupItem>
                          <ListGroupItem>100 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="primary">
                        Get plan
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
