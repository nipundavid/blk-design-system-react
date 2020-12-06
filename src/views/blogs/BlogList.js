import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import NavBar from "views/dev-portfolio/NavBar";
import Footer from "components/Footer/Footer.js";
import axios from "axios";
import { BlogCard } from "./BlogCard";
const BlogList = (props) => {
  const [myBlogs, setMyBlogs] = useState([]);
  useEffect(() => {
    const mediumData = async () => {
      await axios
        .get(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nipundavid`
        )
        .then(async (res) => await res.data)
        .then((data) => {
          console.log(data);
          setMyBlogs(data.items);
        });
    };
    mediumData();
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
                {myBlogs.map((blog, index) => {
                  if (blog.categories.length > 0) {
                    console.log(blog);
                    return (
                      <Col md="4" key={index}>
                        <BlogCard blog={blog} />
                      </Col>
                    );
                  }
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
export default BlogList;
