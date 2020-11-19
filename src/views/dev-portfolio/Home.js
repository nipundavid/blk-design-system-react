import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";
import classnames from "classnames";
import NavBar from "views/dev-portfolio/NavBar";
import Footer from "components/Footer/Footer.js";
import PerfectScrollbar from "perfect-scrollbar";

const Home = () => {
  const [tabs, setTabs] = useState(1);

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");

    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);

  const carouselItems = [
    {
      src: require("assets/img/sheep-render.png"),
      altText: "sheep 1",
      caption: "Meh....",
    },
    {
      src: require("assets/img/that-cold-night.png"),
      altText: "Slide 2",
      caption: "That cold night",
    },
  ];

  let ps = null;
  const toggleTabs = (e, index) => {
    e.preventDefault();
    setTabs(index);
  };

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="page-header content-center">
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
          <section className="section">
            <Container className="align-items-center ">
              <Row>
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">Nipun David</h1>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description">
                    Hi, welcome to my website. After completing engineering I
                    started as a game developer and then switched gear to
                    Augmented Reality and Virtual Reality. Currently I am
                    working at Nagarro where I got chance to expand my horizon
                    and I was able to add few other skills in my resume. Here
                    you will find the glimpse of what I have learned so far
                    during my time in IT industry.
                  </p>

                  <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      href="https://www.linkedin.com/in/nipundavid/"
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Let's connect on LinkedIn
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="medium"
                      href="https://medium.com/@nipundavid"
                      id="tooltip982846143"
                      target="_blank"
                    >
                      <i className="fab fa-medium" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Take me to Medium
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="instagram"
                      href="https://www.instagram.com/david_the_great_nipun/"
                      id="tooltip951161185"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                      Follow on Instagram
                    </UncontrolledTooltip>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle shadow-lg"
                        src={require("assets/img/mike.png")}
                      />
                      <h4 className="title">Skills Snapshot</h4>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: tabs === 1,
                            })}
                            onClick={(e) => toggleTabs(e, 1)}
                            href="#pablo"
                          >
                            XR
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: tabs === 2,
                            })}
                            onClick={(e) => toggleTabs(e, 2)}
                            href="#pablo"
                          >
                            Web
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: tabs === 3,
                            })}
                            onClick={(e) => toggleTabs(e, 3)}
                            href="#pablo"
                          >
                            Tools
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + tabs}
                      >
                        <TabPane tabId="tab1">
                          <Table className="tablesorter" responsive>
                            <tbody>
                              <tr>
                                <td>Mobile AR</td>
                                <td>
                                  <img
                                    alt="..."
                                    className="img-center img-fluid shadow-lg"
                                    src={require("assets/img/arcore.png")}
                                  />
                                </td>
                                <td>
                                  <img
                                    alt="..."
                                    className="img-center img-fluid shadow-lg"
                                    src={require("assets/img/arkit.png")}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>HMD</td>
                                <td>
                                  <img
                                    alt="..."
                                    className="img-center img-fluid shadow-lg"
                                    src={require("assets/img/hololens.png")}
                                  />
                                </td>
                                <td>
                                  <img
                                    alt="..."
                                    className="img-center img-fluid shadow-lg "
                                    src={require("assets/img/oculus.png")}
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab2">
                          <Table>
                            <tbody>
                              <tr>
                                <td>Server End</td>
                                <td>
                                  <img
                                    alt="..."
                                    className="img-center img-fluid shadow-lg badge-neutral"
                                    src={require("assets/img/node.png")}
                                  />
                                </td>
                                <td>
                                  <img
                                    alt="..."
                                    className="img-center img-fluid shadow-lg badge-neutral"
                                    src={require("assets/img/ExpressJS.png")}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>Front End</td>
                                <td>
                                  <img
                                    alt="..."
                                    className="img-center img-fluid shadow-lg"
                                    src={require("assets/img/react.png")}
                                  />
                                </td>
                                <td>
                                  <img
                                    alt="..."
                                    className="img-center img-fluid shadow-lg"
                                    src={require("assets/img/babylonjs.png")}
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab3">
                          <Table>
                            <tbody>
                              <tr>
                                <td>3D Engine</td>
                                <td>
                                  <img
                                    alt="..."
                                    className="img-center img-fluid shadow-lg"
                                    src={require("assets/img/unity3D.png")}
                                  />
                                </td>
                                <td>
                                  <img
                                    alt="..."
                                    className="img-center img-fluid shadow-lg"
                                    src={require("assets/img/unreal.png")}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>IDE</td>
                                <td>
                                  <img
                                    alt="..."
                                    className="img-center img-fluid shadow-lg"
                                    src={require("assets/img/vscode.png")}
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td>Misc</td>
                                <td>
                                  <img
                                    alt="..."
                                    className="img-center img-fluid shadow-lg"
                                    src={require("assets/img/blender.png")}
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
        <section className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Projects</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  Although I am working in XR for last couple of years but I
                  have a soft corner for game development. That's why I like
                  reading and learning more about computer graphics and 3D.
                  Apart from XR, I have fair hands on experience of the web.
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="/all-projects"
                  >
                    <i className="tim-icons icon-bulb-63" /> See More
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Contact</h1>
                    <h5 className="text-on-back">03</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Your Name</label>
                            <Input defaultValue="" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder="" type="email" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input defaultValue="" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Company</label>
                            <Input defaultValue="" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder="Hello there!" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                      >
                        Send text
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Current Location</h4>
                    <p>
                      Delhi/NCR, <br />
                      India <br />
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give a ring</h4>
                    <p>
                      +91-9953092721 <br />
                      Mon - Fri, 10:00-18:00
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
