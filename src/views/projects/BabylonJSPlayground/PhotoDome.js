import React from "react";
import { Engine, Scene } from "react-babylonjs";
import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import "./style.css";
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
    var vrHelper = scene.createDefaultVRExperience({
      useCustomVRButton: true,
    });
    scene.actionManager = new BABYLON.ActionManager(scene);
    // From 2D view to fullscreen VR
    scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        {
          trigger: BABYLON.ActionManager.OnKeyDownTrigger,
          parameter: "v",
        },
        function () {
          vrHelper.enterVR();
        }
      )
    );
    // From 2D view to fullscreen
    scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        {
          trigger: BABYLON.ActionManager.OnKeyDownTrigger,
          parameter: "f",
        },
        function () {
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            canvas.requestFullscreen();
          }
        }
      )
    );
    // From fullscreenVR to 2D view
    scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        {
          trigger: BABYLON.ActionManager.OnKeyDownTrigger,
          parameter: "e",
        },
        function () {
          vrHelper.exitVR();
          document.exitFullscreen();
        }
      )
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
