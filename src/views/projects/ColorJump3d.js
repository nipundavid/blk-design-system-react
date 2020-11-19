import React, { useEffect, useState } from "react";
import Unity, { UnityContent } from "react-unity-webgl";

const ColorJump3D = () => {
  const unityContent = new UnityContent(
    "ColorJump3D/Build/build.json",
    "ColorJump3D/Build/UnityLoader.js"
  );

  return (
    <>
      <div className="wrapper">
        <Unity unityContent={unityContent} />
      </div>
    </>
  );
};

export default ColorJump3D;
