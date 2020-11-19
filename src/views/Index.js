/*!


* BLK Design System React - v1.1.0


* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim



* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import Home from "views/dev-portfolio/Home";
import ProjectsPage from "views/dev-portfolio/ProjectsPage";
import Project from "views/projects/Project";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/all-projects">
              <ProjectsPage />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Redirect from="/" to="/home" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Index;
