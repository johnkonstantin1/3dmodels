// import React, { useRef } from 'react'
// // import { Canvas } from '@react-three/fiber'
// import { PerspectiveCamera, RenderTexture, Text, } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'

// function Cube() {
//     const textRef = useRef()

//     useFrame(state=> (textRef.current.position.x = Math.sin(state.clock.elapsedTime)*2))
//   return (
//     <mesh>
//         <boxGeometry />
//         <meshStandardMaterial>
//             <RenderTexture attach="map">
//                 <PerspectiveCamera makeDefault position={[0,0,5]}/>
//                 <color attach="background" args={["#f59ae7"]}/>
//                 <Text ref={textRef} fontSize={1} color="#1f151d">
//                     here we are
//                 </Text>
//             </RenderTexture>
//         </meshStandardMaterial>
//     </mesh>
//   )
// }

// export default Cube


import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#f59ae7"]} />
          <Text ref={textRef} fontSize={1} color="#1f151d">
            who we are?
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;