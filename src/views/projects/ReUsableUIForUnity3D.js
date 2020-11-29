import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
export const ReUsableUIForUnity3D = () => {
  useEffect(() => {
    window.open("https://github.com/nipundavid/ReUsableUIForUnity3D/");
  });
  return <Redirect to="/all-projects" />;
};
