import React, { useEffect } from "react";
import { Container } from "reactstrap";
import NavBar from "views/Blog/NavBar";

const Home = () => {
  useEffect(() => {
    document.body.classList.toggle("landing-page");
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <img alt="..." className="dots" src={require("assets/img/dots.png")} />
        <img alt="..." className="path" src={require("assets/img/path4.png")} />
        <div className="wrapper"></div>
      </Container>
    </React.Fragment>
  );
};

export default Home;
