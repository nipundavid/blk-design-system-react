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
const ColorJump3D = () => {
  useEffect(() => {
    document.body.classList.toggle("profile-page");
    window.scrollTo(0, 0);
    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  }, []);
  const unityContent = new UnityContent(
    "ColorJump3D/Build/build.json",
    "ColorJump3D/Build/UnityLoader.js"
  );

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
      <NavBar />
      <div className="wrapper">
        <div className="content-center">
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
            <div className="wrapper">
              <div className="content-center page-header ">
                <section className="section">
                  <Container>
                    <Row className="justify-content-between">
                      <Col md="6">
                        <h1 className="profile-title text-left">
                          Color Jump 3D
                        </h1>
                        <h5 className="text-on-back">about</h5>
                        <p className="profile-description text-left">
                          While creating this game, I had this thought in my
                          mind that it has to be hyper-casual and since I am not
                          very good at game art tools I had to come up with a
                          minimalist theme given that I hardly get time to work
                          on my projects I generally decide to go with primitive
                          mesh and be creative with what the tool has to offer
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
                        Click on play icon and use mouse click or space key to
                        jump
                      </h4>
                    </Col>
                  </Row>
                  <div>
                    <Unity unityContent={unityContent} />
                  </div>
                </Container>
              </section>
              <section className="section">
                <Container>
                  <Row className="justify-content-md-center">
                    <Col className="text-center" lg="8" md="12">
                      <h2 className="title">
                        Did you like this hyper-casual game?
                      </h2>
                      <h4 className="description">
                        Cause if you do, it can be yours. Hit the button below
                        to navigate to marketplace where you can find unity3D
                        package for this game
                      </h4>
                    </Col>
                    <Col className="text-center" lg="8" md="12">
                      <Button
                        className="btn-round"
                        color="primary"
                        href="https://assetstore.unity.com/packages/templates/color-jump-3d-63099?aid=1101lNJe&utm_source=aff"
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
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ColorJump3D;
