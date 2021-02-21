import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
export const ServicesAndMiddleware = () => {
  useEffect(() => {
    window.open("https://github.com/nipundavid/microservice101-nodeJS");
  });
  return <Redirect to="/all-projects" />;
};
