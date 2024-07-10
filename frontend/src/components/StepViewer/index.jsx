import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import { LoadStep } from './StepLoader'
import { OrbitControls } from '@react-three/drei'

function StepModel({ file, ...props }) {
  const [obj, setObj] = useState(null)
  useEffect(() => {
    async function load() {
      const mainObject = await LoadStep(file)
      console.log('mainObject', mainObject)
      setObj(mainObject)
    }
    load()
  }, [])
  if (!obj) {
    return null
  }
  return (
    <group {...props}>
      <primitive object={obj} />
    </group>
  )
}

export default function StepViewer({ file }) {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <StepModel
        scale={[0.1, 0.1, 0.1]}
        // url="/Gripper01.stp"
        file={file}
      />
    </Canvas>
  )
}
