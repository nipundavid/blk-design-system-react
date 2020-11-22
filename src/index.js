/*!


* BLK Design System React - v1.1.0


* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim



* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import React from "react";
// import ReactDOM from "react-dom";

// import "assets/css/nucleo-icons.css";
// import "assets/scss/blk-design-system-react.scss?v=1.1.0";
// import "assets/demo/demo.css";

// import Index from "views/Index.js";
// import { Provider } from "react-redux";
// import store from "./redux/store";

// ReactDOM.render(
//   <Provider store={store}>
//     <Index />
//   </Provider>,
//   document.getElementById("root")
// );
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.1.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Home from "views/dev-portfolio/Home";
import ProjectsPage from "views/dev-portfolio/ProjectsPage";
import Project from "views/projects/Project";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/components" render={(props) => <Index {...props} />} />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/register-page"
          render={(props) => <RegisterPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
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
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
