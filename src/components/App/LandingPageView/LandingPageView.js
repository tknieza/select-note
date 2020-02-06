import React, { useRef, useState } from "react";
import { Box, Image, Flex, Card, Heading, Text } from "rebass";
import { Canvas, useFrame } from "react-three-fiber";
import NavigationButton from "../Navigation/NavigationButton";

const cubeBigSize = 1.5;
const cubeSmallSize = 1;

const Cube = props => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={
        active
          ? [cubeBigSize, cubeBigSize, cubeBigSize]
          : [cubeSmallSize, cubeSmallSize, cubeSmallSize]
      }
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
};

const LandingPageView = ({ darkmode, routes, history }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "background"
      }}
    >
      <Box
        sx={{
          p: 3,
          flexGrow: 2,
          flexBasis: 0
        }}
      >
        <Card
          sx={{
            backgroundColor: "background",
            width: "99%",
            margin: "auto",
            marginBottom: "1rem"
          }}
        >
          <Heading
            sx={{
              fontFamily: "'Pacifico', cursive",
              fontSize: ["3rem", "6rem"],
              color: "primary",
              userSelect: "none",
              textAlign: "center"
            }}
          >
            Select Note
          </Heading>
        </Card>
        <Card
          sx={{ backgroundColor: "background", width: "99%", margin: "auto" }}
        >
          <Heading
            sx={{
              fontFamily: "'Pacifico', cursive",
              fontSize: ["1rem", "2rem"],
              color: "secondary",
              userSelect: "none",
              textAlign: "center",
              marginBottom: "1rem"
            }}
          >
            Think it, write it, do it.
          </Heading>
        </Card>
        <Card
          sx={{ backgroundColor: "background", width: "99%", margin: "auto" }}
        >
          {/* <Text color="text" fontFamily="body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            voluptates nisi unde impedit recusandae! Consequuntur eaque eius
            iusto necessitatibus corrupti accusamus, recusandae in omnis, vero
            tenetur alias sint! Ducimus, ad.
          </Text> */}
        </Card>
      </Box>
      <Box
        sx={{
          minHeight: "100%",
          height: "30rem"
        }}
      >
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Cube position={[0, 0, 0]} />
          <Cube position={[-cubeBigSize, 0, 0]} />
          <Cube position={[cubeBigSize, 0, 0]} />
          <Cube position={[0, -cubeBigSize, 0]} />
          <Cube position={[-cubeBigSize, -cubeBigSize, 0]} />
          <Cube position={[cubeBigSize, -cubeBigSize, 0]} />
          <Cube position={[-cubeBigSize, cubeBigSize, 0]} />
          <Cube position={[cubeBigSize, cubeBigSize, 0]} />
          <Cube position={[0, cubeBigSize, 0]} />
        </Canvas>
      </Box>
    </Box>
  );
};

import("prop-types").then(propTypes => {
  LandingPageView.propTypes = {
    darkmode: propTypes.bool.isRequired
  };
});

export default LandingPageView;
