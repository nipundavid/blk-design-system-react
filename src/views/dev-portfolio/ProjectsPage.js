import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { myProjects } from "../../Model/projects";
import { CreateProjectCards } from "../../views/dev-portfolio/ProjectCard";
import { Button, Modal, Container, Row, Col } from "reactstrap";
import NavBar from "views/dev-portfolio/NavBar";
import Footer from "components/Footer/Footer.js";
import {} from "components/Footer/Footer.js";
import { setProjectName } from "../../redux";
import { connect } from "react-redux";

const ProjectsPage = (props) => {
  const history = useHistory();
  const [modalState, setModalState] = useState(false);

  const toggleModal = () => {
    let _modalState = modalState;
    setModalState(!_modalState);
  };

  const UpdateProjectData = () => {
    props.setProjectName();
    console.log(props.projectName);
  };

  useEffect(() => {
    document.body.classList.toggle("profile-page");
    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  }, []);

  function OpenProject() {
    history.push("/project");
  }

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
                        toggleModal={UpdateProjectData}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </section>
          <Modal
            modalClassName="modal-mini modal-primary modal-mini"
            isOpen={modalState}
            toggle={() => toggleModal()}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => toggleModal()}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="modal-profile">
                <i className="tim-icons icon-sound-wave" />
              </div>
            </div>
            <div className="modal-body">
              <p>
                Thanks for your interest in my projects, but the work after this
                is under development
              </p>
            </div>
            <div className="modal-footer">
              <Button className="btn-neutral" color="link" type="button">
                Back
              </Button>
              <Button
                className="btn-neutral"
                color="link"
                onClick={() => toggleModal()}
                type="button"
              >
                Close
              </Button>
            </div>
          </Modal>
        </div>
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    projectName: state.projectName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProjectName: () => dispatch(setProjectName()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
