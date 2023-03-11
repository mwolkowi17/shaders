import { LayerMaterial,Displace, Fresnel, Depth } from 'lamina'
import * as THREE from 'three'
import React, { useRef, useState} from 'react'
import { useFrame,Canvas } from '@react-three/fiber'

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.x += delta))
    // Return view, these are regular three.js elements expressed in JSX
    return (
      
      <mesh
        
        ref={mesh}
       >
        <sphereGeometry args={[1, 1, 1]} />
        <LayerMaterial
          color={'#ffffff'}
          lighting={'physical'} //
          transmission={1}
          roughness={0.1}
          thickness={2}
        >
          <Depth
            near={0.4854}
            far={0.7661999999999932}
            origin={[-0.4920000000000004, 0.4250000000000003, 0]}
            colorA={'#fec5da'}
            colorB={'#00b8fe'}
          />
          <Displace  strength={0} scale={5} offset={[0.09189000000357626, 0, 0]} />
          <Fresnel
            color={'#fefefe'}
            bias={-0.3430000000000002}
            intensity={3.8999999999999946}
            power={3.3699999999999903}
            factor={1.119999999999999}
            mode={'screen'}
          />
        </LayerMaterial>
      </mesh>
    )
  }
  

export function GradientSphere() {
    return (
        <Canvas>
        <Box/>
           
       
        </Canvas>
    )
}