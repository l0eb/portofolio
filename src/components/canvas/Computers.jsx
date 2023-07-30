import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import Monitor from "./Scene_monitor";
import Desktop from "./Scene_pc";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // const computer = useGLTF("./monitor/scene.glb");
  // const monitor = <Monitor />;

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      {/* <primitive object={computer.scene} /> */}
      {/* <Monitor /> */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={0.3}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <Desktop
        classname="z-10"
        position={isMobile ? [0, -3, -2.2] : [0, -5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        scale={isMobile ? 0.7 : 0.75}
      />
    </mesh>
  );
};
// useGLTF.preload("/scene.gltf");
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //add listener for cahnges to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    //set the initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);

    //define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    //add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 38 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      {/* <Preload all /> */}
    </Canvas>
  );
};

export default ComputersCanvas;
