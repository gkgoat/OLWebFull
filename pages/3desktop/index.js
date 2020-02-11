import React, { useRef, useState } from 'react'
import root from 'react-shadow';
import {chromeSwitch} from '../../../OLEx/dist/index.js'
import * as Polyglot from 'node-polyglot'
import { Canvas, useFrame } from 'react-three-fiber'
export function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    
    // Rotate mesh every frame, this is outside of React without overhead
    
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={(hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]).map(v => v * props.scale)}
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1].map(v => v * props.scale)} />
        <meshStandardMaterial attach="material" color={props.color} />
      </mesh>
    )
  }
export default class extends React.Component{
render(){return (<Canvas>

    
</Canvas>)}
}