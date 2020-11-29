import React from "react";
import { Engine, Scene } from "react-babylonjs";
import * as BABYLON from "@babylonjs/core/Legacy/legacy";
const PhotoDome = () => {
  const onSceneMount = (event) => {
    const { scene, canvas } = event;
    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      -Math.PI / 2,
      Math.PI / 2,
      5,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControl(canvas, true);
    camera.inputs.attached.mousewheel.detachControl(canvas);

    var dome = new BABYLON.PhotoDome(
      "360",
      "assets/ESO_Paranal_360_Marcio_Cabral_Chile_07-CC.jpg",
      {
        resolution: 32,
        size: 1000,
      },
      scene
    );
  };
  return (
    <Engine canvasId="sample-canvas">
      <Scene onSceneMount={onSceneMount}>
        <hemisphericLight
          name="light1"
          intensity={0.7}
          direction={BABYLON.Vector3.Up()}
        />
      </Scene>
    </Engine>
  );
};

export default PhotoDome;
