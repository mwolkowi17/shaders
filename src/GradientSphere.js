import { LayerMaterial, Depth } from 'lamina'
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
                color="#ffd0d0" //
                lighting="basic"
             
            >
                <Depth
                    colorA="#810000" //
                    colorB="#ffd0d0"
                    alpha={0.2}
                    mode="multiply"
                    near={0}
                    far={5}
                    origin={[6, 2, 1]}
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