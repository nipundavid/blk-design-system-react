/*!


* BLK Design System React - v1.1.0


* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim



* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <div className="btn-wrapper profile">
            <div className="d-flex justify-content-center">
              <h3 className="title">Thanks for stopping by</h3>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.linkedin.com/in/nipundavid"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                connect with me
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://medium.com/@nipundavid"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-medium" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Give a clap
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://github.com/nipundavid"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-github" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Star a repo
              </UncontrolledTooltip>
            </div>
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
