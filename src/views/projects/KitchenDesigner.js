import React, { useEffect } from "react";
import NavBar from "views/dev-portfolio/NavBar";
import Footer from "components/Footer/Footer.js";
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";
const KitchenDesigner = () => {
  useEffect(() => {
    document.body.classList.toggle("profile-page");
    window.scrollTo(0, 0);
    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  }, []);
  const carouselItems = [
    {
      src: require("assets/img/kitchen-render/1.png"),
      altText: "",
      caption: "1. Select the kitchen type",
    },
    {
      src: require("assets/img/kitchen-render/2.png"),
      altText: "",
      caption: "2. Enter wall size",
    },
    {
      src: require("assets/img/kitchen-render/3.png"),
      altText: "",
      caption: "3. Select model from the catalog",
    },
    {
      src: require("assets/img/kitchen-render/4.png"),
      altText: "",
      caption: "4. Position it on the wall",
    },
    {
      src: require("assets/img/kitchen-render/5.png"),
      altText: "",
      caption: "5. Apply different face finishes",
    },
    {
      src: require("assets/img/kitchen-render/6.png"),
      altText: "",
      caption: "6. Visualize in 3D",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="content-center page-header ">
          <section className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <h1 className="profile-title text-left">
                    3D Kitchen Designer
                  </h1>
                  <h5 className="text-on-back">about</h5>
                  <br />
                  <p className="profile-description text-left">
                    One of the many apps that I developer using Unity3D. This is
                    for designing a modern kitchen in 3D which has completely
                    modular setup. <br />
                    You start with selecting the kitchen type and then design
                    from there, in the end, you can visualize the entire design
                    in 3D and change the finishes of the setup as well
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
                <h1 className="title text-primary ">Video</h1>
                <h4 className="description"></h4>
              </Col>
            </Row>
            <div
              className="video"
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0,
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src={`https://www.youtube.com/embed/zER3UHQmScc`}
                frameBorder="0"
              />
            </div>
          </Container>
        </section>
        <section className="section">
          <Container>
            <Row className="justify-content-md-center">
              <Col className="text-center" lg="8" md="12">
                <h2 className="title">
                  Did you like this 3D Designer/Visualizer?
                </h2>
                <h4 className="description">
                  Cause if you do, and you have something like this in mind that
                  you want to built, I can help you with it
                </h4>
              </Col>
              <Col className="text-center" lg="8" md="12">
                <Button
                  className="btn-round"
                  color="primary"
                  href="https://www.linkedin.com/in/nipundavid/"
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
                  href="https://www.linkedin.com/in/nipundavid/"
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
      <Footer />
    </>
  );
};

export default KitchenDesigner;
