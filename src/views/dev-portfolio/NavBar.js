import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const NavBar = () => {
  const [color, setColor] = useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [collapseOut, setCollapseOut] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  const mystyle = {
    fontSize: 20,
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
  };

  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/home" tag={Link} id="navbar-brand">
            <span style={mystyle}>Nipun David</span>
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by Nipun David
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Nipun David
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/all-projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/all-blogs">Blogs</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="tim-icons icon-single-02" />
                Social Links
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem
                  href="https://www.linkedin.com/in/nipundavid"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                  LinkedIn
                </DropdownItem>
                <DropdownItem
                  href="https://medium.com/@nipundavid"
                  target="_blank"
                >
                  <i className="fab fa-medium" />
                  Medium
                </DropdownItem>
                <DropdownItem
                  href="https://github.com/nipundavid"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                  GitHub
                </DropdownItem>
                <DropdownItem
                  href="https://docs.google.com/document/d/1hVpluOzUwn-BXJnAFfJcE027QoqxOAHo8Its2R-Zidk/edit"
                  target="_blank"
                >
                  <i className="tim-icons icon-attach-87" />
                  Download CV
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
