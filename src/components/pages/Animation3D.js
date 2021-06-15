import React, { useEffect } from "react";
import { Canvas } from "react-three-fiber";
import shallow from "zustand/shallow";

import { Box, useStore } from "./Box";
import { Stars } from "./Stars";

import "./Animation3D.css";

const Animation3D = () => {
  const [boxes, mutate] = useStore(
    (state) => [state.boxes, state.mutate],
    shallow
  );

  useEffect(() => {
    function animate() {
      mutate();
      requestAnimationFrame(animate);
    }
    animate();
  }, [mutate]);

  return (
    <Canvas className="canvas">
      {boxes.map((id) => (
        <Box className="box" key={id} id={id} />
      ))}
      <Stars className="stars" />
    </Canvas>
  );
};

export default Animation3D;
