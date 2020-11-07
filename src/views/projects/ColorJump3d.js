import React, { useEffect, useState } from "react";
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
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import NavBar from "views/dev-portfolio/NavBar";
import Footer from "components/Footer/Footer.js";
// import om from "./ColorJump3D/build/Build/";

const ColorJump3D = () => {
  //   const [unityContext, setUnityContext] = useState(null);
  useEffect(() => {
    document.body.classList.toggle("profile-page");

    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  }, []);

  const unityContent = new UnityContent(
    "ColorJump3D/Build/build.json",
    "ColorJump3D/Build/UnityLoader.js"
  );

  return (
    <>
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
              <Unity unityContent={unityContent} />
            </Container>
          </section>
        </div>
      </div>
    </>
  );
};

export default ColorJump3D;
