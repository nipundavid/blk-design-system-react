import React, { useEffect } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
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
const ShadowRun = () => {
  useEffect(() => {
    document.body.classList.toggle("profile-page");
    window.scrollTo(0, 0);
    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  }, []);
  const unityContent = new UnityContent(
    "ShadowRun/Build/build.json",
    "ShadowRun/Build/UnityLoader.js"
  );

  const carouselItems = [
    {
      src: require("assets/img/shadow-run/shadow-run-1.png"),
      altText: "",
      caption: "",
    },
    // {
    //   src: require("assets/img/shadow-run/shadow-run-1.png"),
    //   altText: "",
    //   caption: "",
    // },
  ];

  const styleObject = {
    height: "720px",
    width: "50%",
  };
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="content-center page-header ">
          <section className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <h1 className="profile-title text-left">Shadow Run</h1>
                  <h5 className="text-on-back">about</h5>
                  <p className="profile-description text-left">
                    It took me just a weekend to conceptualize, plan and develop
                    this game. It was the summer of 2016, my best friend
                    challenged me to create something cool in just a weekend.
                    <br /> At the time shadow bases games were doing well on
                    play-store, I thought let's do something with 2D shadows and
                    this was the outcome on Sunday evening.
                  </p>
                </Col>
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel
                      items={carouselItems}
                      height="20%"
                      width="10%"
                    />
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
                  Use left and right arrow key on your keyboard to play
                </h4>
              </Col>
            </Row>
            {/* <div style={styleObject} className="justify-content-between">
              <div></div>
            </div> */}
            <div className="d-flex justify-content-center">
              <div style={styleObject}>
                <Unity unityContent={unityContent} />
              </div>
            </div>
          </Container>
        </section>
        <section className="section">
          <Container>
            <Row className="justify-content-md-center">
              <Col className="text-center" lg="8" md="12">
                <h2 className="title">Did you like this hyper-casual game?</h2>
                <h4 className="description">
                  Cause if you do, it can be yours. Hit the button below to
                  navigate to marketplace where you can find unity3D package for
                  this game
                </h4>
              </Col>
              <Col className="text-center" lg="8" md="12">
                <Button
                  className="btn-round"
                  color="primary"
                  href="https://assetstore.unity.com/packages/templates/shadow-run-62561"
                  role="button"
                  size="lg"
                  target="_blank"
                >
                  Buy Now
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
      <Footer />
    </>
  );
};

export default ShadowRun;
