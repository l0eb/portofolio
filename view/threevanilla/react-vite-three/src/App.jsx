import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./styles.css";

const Box = () => {
  return (
    <mesh>
      <boxGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Box />
    </Canvas>
  );
}

export default App;
