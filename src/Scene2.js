import { Canvas } from '@react-three/fiber';
import { useRef, useMemo } from 'react';


const fragmentShader = `
varying float v_test

void main() {
 

  gl_FragColor = vec4(1,1,1,1);
}
`;

const vertexShader = `
attribute float u_test;
varying float v_test


void main() {
   u_test=v_test
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += u_test;
  
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
  
    gl_Position = projectedPosition;
  }
`;

const Cube = () => {
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      u_test: {
        value: 1.0,
      },
    }),
    []
  );

  return (
    <mesh ref={mesh}>
      {/* <boxGeometry args={[1, 1, 1]} rotation={[Math.PI / 2, Math.PI / 2, 0]} /> */}
      <icosahedronGeometry args={[2, 20]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
      {/* <meshBasicMaterial color={0xffffff} /> */}
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        // uniforms={uniforms}
      />
    </mesh>
  );
};

export const Scene2 = () => {
  return (
    <Canvas>
      <Cube />
    </Canvas>
  );
};