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

const Project = () => {
  useEffect(() => {
    document.body.classList.toggle("profile-page");
    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  }, []);

  return (
    <>
      {/* <NavBar /> */}
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
              <ColorJump3D></ColorJump3D>
            </Container>
          </section>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Project;
