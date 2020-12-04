import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";
import PhotoDome from "./BabylonJSPlayground/PhotoDome";
const _360Viewer = () => {
  const carouselItems = [
    {
      src: require("assets/img/color-jump-3d/unity-screenshot-1.PNG"),
      altText: "",
      caption: "",
    },
    {
      src: require("assets/img/color-jump-3d/unity-screenshot-2.PNG"),
      altText: "",
      caption: "",
    },
  ];

  return (
    <>
      <div className="wrapper">
        <div className="content-center page-header ">
          <section className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <h1 className="profile-title text-left">360 Walkthrough</h1>
                  <h5 className="text-on-back">about</h5>
                  <p className="profile-description text-left">
                    This is something similar to one of the very early
                    assignments I did when I started working on AR and VR using
                    Unity3D. But these kind of experience makes more sense for
                    the web unless you are for the VR but hey! now web support
                    VR too with the help of OpenXR and WebXR
                  </p>
                </Col>
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
        <section>
          <Container>
            <Row className="justify-content-center">
              <Col lg="8" md="12">
                <h1 className="title text-primary ">Live Demo</h1>
                <h4 className="description">
                  Click & drag mouse on image to rotate and select PoI - Point
                  of Interst, to navigate and see information
                </h4>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className="text-center">
                <PhotoDome />
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className="text-left">
                <h4 className="description">f-Fullscreen v-VR e-Exit</h4>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section">
          <Container>
            <Row className="justify-content-md-center">
              <Col className="text-center" lg="8" md="12">
                <h2 className="title">Did you like this Virtual Walkthrough</h2>
                <h4 className="description">
                  Cause if you do, and you have something like this in mind that
                  you want to built, I can help you with it
                </h4>
              </Col>
              <Col className="text-center" lg="8" md="12">
                <Button
                  className="btn-round"
                  color="primary"
                  href="https://www.codementor.io/@nipundavid"
                  role="button"
                  size="lg"
                  target="_blank"
                >
                  Contact Now
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <br />
                <h3 className="text-info font-weight-light mb-2">
                  Thank you for your interest!
                </h3>
                <h4 className="mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className="text-lg-right btn-wrapper" lg="6">
                <br />
                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  id="twitter"
                  size="lg"
                  href="https://twitter.com/nipundavid"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="twitter">
                  Tweet!
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-round"
                  color="linkedin"
                  id="linkedin"
                  size="lg"
                  href=" https://www.linkedin.com/in/nipundavid/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </Button>
                <UncontrolledTooltip delay={0} target="linkedin">
                  Let's connect!
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-round"
                  color="github"
                  href="https://github.com/nipundavid"
                  id="tooltip877922017"
                  size="lg"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip877922017">
                  What I am doing these days
                </UncontrolledTooltip>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default _360Viewer;
