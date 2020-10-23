import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import NavBar from "views/dev-portfolio/NavBar";
import Footer from "components/Footer/Footer.js";

const Home = () => {
  const [squareState, setSquareState] = useState({});

  useEffect(() => {
    document.body.classList.toggle("landing-page");
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
  }, []);

  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquareState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)",
    });
  };
  return (
    <React.Fragment>
      <NavBar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
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
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squareState.squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squareState.squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squareState.squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squareState.squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squareState.squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squareState.squares1to6 }}
              />
            </Container>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
