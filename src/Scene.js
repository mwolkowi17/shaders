import { Canvas } from '@react-three/fiber';
import { useRef, useMemo } from 'react';


const fragmentShader = `
uniform float u_test;

varying vec2 vUv;

vec3 colorA = vec3(0.912,0.191,0.652);
vec3 colorB = vec3(1.000,0.777,0.052);

void main() {
  // "Normalizing" with an arbitrary value
  // We'll see a cleaner technique later :)   
  // vec2 normalizedPixel = gl_FragCoord.xy/600.0;
  vec3 color = mix(colorA, colorB, vUv.x);
  // vec3 color = mix(colorA, colorB, normalizedPixel.x);

  gl_FragColor = vec4(color,1.0);
}
`;

const vertexShader = `
uniform float u_test;
varying vec2 vUv;

void main() {
    vUv = uv;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    // modelPosition.y += sin(modelPosition.x * 4.0) * 0.2;
  
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

export const Scene = () => {
  return (
    <Canvas>
      <Cube />
    </Canvas>
  );
};