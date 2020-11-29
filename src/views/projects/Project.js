import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import NavBar from "views/dev-portfolio/NavBar";
import Footer from "components/Footer/Footer.js";
import ColorJump3D from "./ColorJump3d";
import ShadowRun from "./ShadowRun";
import { ReUsableUIForUnity3D } from "./ReUsableUIForUnity3D";
import _360Viewer from "./_360Viewer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Project = (props) => {
  const [projectId, setProjectId] = useState(1);
  useEffect(() => {
    document.body.classList.toggle("profile-page");
    window.scrollTo(0, 0);
    console.log(props.projectId);
    setProjectId(props.projectId);
    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  }, []);

  const renderProject = (param) => {
    switch (param) {
      case 1:
        return <ColorJump3D></ColorJump3D>;
      case 2:
        return <ShadowRun></ShadowRun>;
      case 3:
        return <ReUsableUIForUnity3D></ReUsableUIForUnity3D>;
      case 4:
        return <_360Viewer></_360Viewer>;
      default:
        return <Redirect to="/all-projects" />;
    }
  };

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
          <Container>{renderProject(projectId)}</Container>
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
