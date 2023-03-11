import { LayerMaterial, Depth } from 'lamina'
import { useFrame,Canvas } from '@react-three/fiber'
import React, { useRef, useState} from 'react'


export const Sphere1=()=>{
    const mesh = useRef()
    return(
       <Canvas>
        <ambientLight />
            <mesh ref={mesh}>
                <sphereGeometry args={[15, 32, 16]}/>
                <meshStandardMaterial color={'orange'}/>
            </mesh>
       </Canvas>
    )
}

export const SphereColor1=()=>{
    return(
        <Canvas>
        <Sphere1/>
        <LayerMaterial
          color={'#ffffff'}
          lighting={'physical'} //
          transmission={1}
          roughness={0.1}
          thickness={2}
        ></LayerMaterial>
        </Canvas>
    )
}