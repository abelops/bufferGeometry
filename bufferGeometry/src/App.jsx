import { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { BoxGeometry, DoubleSide } from 'three';

function App() {

  const positions = new Float32Array([
    
    -1.0, -1.0,  1.0,
     1.0, -1.0,  1.0,
     1.0,  1.0,  1.0,
    -1.0,  1.0,  1.0,
  
    
    -1.0, -1.0, -1.0,
     1.0, -1.0, -1.0,
     1.0,  1.0, -1.0,
    -1.0,  1.0, -1.0,
  
    
    -1.0,  1.0, -1.0,
     1.0,  1.0, -1.0,
     1.0,  1.0,  1.0,
    -1.0,  1.0,  1.0,
  
    
    -1.0, -1.0, -1.0,
     1.0, -1.0, -1.0,
     1.0, -1.0,  1.0,
    -1.0, -1.0,  1.0,
  
    
     1.0, -1.0, -1.0,
     1.0,  1.0, -1.0,
     1.0,  1.0,  1.0,
     1.0, -1.0,  1.0,
  
    
    -1.0, -1.0, -1.0,
    -1.0,  1.0, -1.0,
    -1.0,  1.0,  1.0,
    -1.0, -1.0,  1.0
  ]);

const normals = new Float32Array([
  [ 0,  0,  1], 
  [ 0,  0, -1], 
  [ 0,  1,  0], 
  [ 0, -1,  0], 
  [ 1,  0,  0], 
  [-1,  0,  0]  
])


const indices = new Uint16Array([
  0,  1,  2,      0,  2,  3,    
  4,  5,  6,      4,  6,  7,    
  8,  9,  10,     8,  10, 11,   
  12, 13, 14,     12, 14, 15,   
  16, 17, 18,     16, 18, 19,   
  20, 21, 22,     20, 22, 23    
]);



  return (
    <div className='bod'>
      <Canvas id='canvas'>
        <axesHelper args={[10]} position={[0, 0 ,0]}/>
        <OrbitControls />
        <PerspectiveCamera
          makeDefault
          args={[45, 800 / 600, 1, 1000]}
          position={[0.1, 10, 5]}
        />
        <mesh>
        <bufferGeometry>
            <bufferAttribute
                attach='attributes-position'
                array={positions}
                count={positions.length / 3}
                itemSize={3}
            />
            <bufferAttribute
                attach='attributes-normal'
                array={normals}
                count={normals.length / 3}
                itemSize={3}
            />
            <bufferAttribute
                attach="index"
                array={indices}
                count={indices.length}
                itemSize={1}
            />
        </bufferGeometry>
        <meshStandardMaterial
            side={DoubleSide}
        />
    </mesh>
        <ambientLight args={["red", 1]} />
      </Canvas>
    </div>
  );
}

export default App;
