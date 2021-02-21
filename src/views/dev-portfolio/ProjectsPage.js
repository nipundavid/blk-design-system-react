import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { myProjects } from "../../Model/projects";
import { CreateProjectCards } from "../../views/dev-portfolio/ProjectCard";
import { Container, Row, Col } from "reactstrap";
import NavBar from "views/dev-portfolio/NavBar";
import Footer from "components/Footer/Footer.js";
import { setProjectId } from "../../redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const ProjectsPage = (props) => {
  const history = useHistory();

  const _UpdateProjectData = (projectId) => {
    props.setProjectId(projectId);
    renderProject(projectId);
  };

  const renderProject = (param) => {
    switch (param) {
      case 1:
        return history.push("/99-cars");
      case 2:
        return history.push("/bottle-shoot");

      case 3:
        return history.push("/kitchen-designer");

      case 4:
        return history.push("/shadow-run");

      case 5:
        return history.push("/reusable-UI-for-unity3D");

      case 6:
        return history.push("/_360Viewer");
      case 7:
        return history.push("/color-jump-3d");
      case 8:
        return history.push("/shadow-jump");
      case 9:
        return history.push("/microservice-101");
      default:
        return <Redirect to="/all-projects" />;
    }
  };

  useEffect(() => {
    document.body.classList.toggle("profile-page");
    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  }, []);

  return (
    <>
      <NavBar />
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
              <Row>
                {myProjects.map((project) => {
                  return (
                    <Col md="4" key={project.id}>
                      <CreateProjectCards
                        project={project}
                        UpdateProjectData={_UpdateProjectData}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </section>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setProjectId: (projectId) => dispatch(setProjectId(projectId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
