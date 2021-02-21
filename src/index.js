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
import BlogList from "views/blogs/BlogList";
import ColorJump3d from "views/projects/ColorJump3d";
import ShadowJump from "views/projects/ShadowJump";
import ShadowRun from "views/projects/ShadowRun";
import _99Cars from "views/projects/_99Cars";
import BottleShoot from "views/projects/BottleShoot";
import { ReUsableUIForUnity3D } from "views/projects/ReUsableUIForUnity3D";
import { ServicesAndMiddleware } from "views/projects/ServicesAndMiddleware";
import _360Viewer from "views/projects/_360Viewer";
import KitchenDesigner from "views/projects/KitchenDesigner";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        {/* <Route path="/components" render={(props) => <Index {...props} />} /> */}
        {/* <Route
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
        /> */}
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/all-projects">
          <ProjectsPage />
        </Route>
        <Route path="/all-blogs">
          <BlogList />
        </Route>
        <Route path="/color-jump-3d">
          <ColorJump3d />
        </Route>
        <Route path="/shadow-run">
          <ShadowRun />
        </Route>
        <Route path="/reusable-UI-for-unity3D">
          <ReUsableUIForUnity3D />
        </Route>
        <Route path="/microservice-101">
          <ServicesAndMiddleware />
        </Route>
        <Route path="/_360Viewer">
          <_360Viewer />
        </Route>
        <Route path="/kitchen-designer">
          <KitchenDesigner />
        </Route>
        <Route path="/shadow-jump">
          <ShadowJump />
        </Route>
        <Route path="/99-cars">
          <_99Cars />
        </Route>
        <Route path="/bottle-shoot">
          <BottleShoot />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
