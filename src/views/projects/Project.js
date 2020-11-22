import React, { useEffect } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
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
import ColorJump3D from "./ColorJump3d";
import ShadowRun from "./ShadowRun";
import { connect } from "react-redux";

const Project = (props) => {
  useEffect(() => {
    document.body.classList.toggle("profile-page");
    window.scrollTo(0, 0);
    console.log(props.projectId);
    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  }, []);

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
            <ColorJump3D></ColorJump3D>
            {/* <ShadowRun></ShadowRun> */}
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    projectId: state.projectId,
  };
};
export default connect(mapStateToProps)(Project);
