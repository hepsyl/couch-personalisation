
import { Canvas } from '@react-three/fiber'
import WaffleModel from './WaffleModel';
import CurdoroyModel from './CurdoroyModel';
import LeatherModel from './LeatherModel';
import {useState} from 'react';
import { Environment, OrbitControls} from "@react-three/drei";
import './App.css'

function App() {

  const [fabricType, setFabricType] = useState('waffle');
  const [fabricColor, setFabricColor] = useState('#f5e6d1');
  const [feetType, setFeetType] = useState('wood');
 

  return (
    <div class="flex flex-col gap-8 px-24 py-12 align-top">
      <div class="px-4 py-2 w-full">
        {<h1 class="text-l font-weight-400 w-full">Your &nbsp;<span class="italic">vision</span>, your &nbsp;<span class="italic">interior</span></h1>}
      </div>
      <div class="flex gap-4 px-4">
        <Canvas camera={{fov:50, position:[0,1,-2.5]}} style={{ height : '50vh', width:'50vw'}} gl={{ colorSpace: 'sRGB', toneMapping:1}} >
          <Environment preset='forest' backgroundIntensity={0} environmentIntensity={0.1}/>
          <ambientLight intensity={0.5} color={'#fff5e3'}/>
          <directionalLight position={[5, 5, 5]} intensity={3.5}  color={'#b2b2b2'}/>
          <spotLight position={[5,-1,0]} intensity={0.5}/>
          {fabricType === 'waffle'&&
          <WaffleModel color={fabricColor} feetType={feetType} />}
          {fabricType === 'curdoroy'&&
          <CurdoroyModel color={fabricColor} feetType={feetType} />}
          {fabricType === 'leather'&&
          <LeatherModel color={fabricColor} feetType={feetType} />}
          <OrbitControls target={[0, 0, 0]} maxZoom={3} minZoom={2} maxDistance={3} minDistance={0} maxPolarAngle={2} minPolarAngle={1} setAzimuthalAngle={0.5} />
        </Canvas>
        <div class="flex flex-col justify-left gap-10">
          <div class="flex flex-col gap-1">
            <h2 class="text-m">1. Choose the fabric type</h2>
            <div class="flex justify-left gap-2">
              <div class="w-fit h-fit px-2 py-1 border border-1 border-white rounded-sm text-s italic" onClick={() => setFabricType('waffle')}>Waffle coton</div>
              <div class="w-fit h-fit px-2 py-1 border border-1 border-white rounded-sm text-s italic" onClick={() => setFabricType('curdoroy')}>Curdoroy</div>
              <div class="w-fit h-fit px-2 py-1 border border-1 border-white rounded-sm text-s italic" onClick={() => setFabricType('leather')}>Leather</div>
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <h2 class="text-m">2. Choose the color of the fabric</h2>
            <div class="flex justify-left gap-2">
              <div class="w-10 h-10 bg-[#f0dbbc] border border-2 border-white rounded-sm" onClick={() => setFabricColor('#f0dbbc')}></div>
              <div class="w-10 h-10 bg-[#533a33] border border-2 border-white rounded-sm" onClick={() => setFabricColor('#744700')}></div>
              <div class="w-10 h-10 bg-[#0044d9] border border-2 border-white rounded-sm" onClick={() => setFabricColor('#1f62db')}></div>
              <div class="w-10 h-10 bg-[#667b68] border border-2 border-white rounded-sm" onClick={() => setFabricColor('#a9ae95')}></div>
              <div class="w-10 h-10 bg-[#ab4d13] border border-2 border-white rounded-sm" onClick={() => setFabricColor('#c37728')}></div>
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <h2 class="text-m">3. Choose the material of the feet</h2>
            <div class="flex justify-left gap-2">
               <div class="w-fit h-fit px-2 py-1 border border-1 border-white rounded-sm text-s italic" onClick={() => setFeetType('wood')}>Wood</div>
               <div class="w-fit h-fit px-2 py-1 border border-1 border-white rounded-sm text-s italic" onClick={() => setFeetType('chrome')}>Chrome</div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default App
