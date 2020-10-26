import React from "react";
import { Container } from "reactstrap";
import NavBar from "views/dev-portfolio/NavBar";
import Footer from "components/Footer/Footer.js";

const Blogs = () => {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="page-header">
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
          <Container className="align-items-center"></Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
