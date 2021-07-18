import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useFrame, useThree, Canvas } from '@react-three/fiber';
import { Physics, usePlane, useCompoundBody, useSphere } from '@react-three/cannon';
import { EffectComposer, SSAO } from '@react-three/postprocessing';

const vec = new THREE.Vector3();
const baubleMaterial = new THREE.MeshLambertMaterial({
  color: '#040307',
  emissive: 'black'
});
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);
const baubles = [...Array(50)].map((_, i) => {
  const args = [0.6, 0.6, 0.6, 0.8, 0.8, 1][Math.floor(Math.random() * 6)];
  return {
    args,
    mass: args,
    position: [2 - Math.random() * 4, 2 - Math.random() * 4, args === 1 ? -args : 0],
    angularDamping: 0.2,
    linearDamping: 0.95
  };
});

interface Props {
  r3f?: any;
  route?: any;
}

function Bauble(props) {
  const position = useRef([0, 0, 0]);
  const [ref, api] = useCompoundBody(() => ({
    ...props,
    shapes: [
      {
        type: 'Box',
        position: [0, 0, 1.2 * props.args],
        args: new THREE.Vector3().setScalar(props.args * 0.4).toArray()
      },
      { type: 'Sphere', args: props.args }
    ]
  }));
  useEffect(() => api.position.subscribe(v => (position.current = v)), [api]);
  //@ts-ignore
  useFrame(() => api.applyForce(vec.set(...position.current).normalize().multiplyScalar(-1).multiplyScalar(props.args * 35).toArray(), [0, 0, 0])) // prettier-ignore
  return (
    <group ref={ref} dispose={null}>
      <mesh scale={props.args} geometry={sphereGeometry} material={baubleMaterial} />
    </group>
  );
}

function Pointer() {
  const viewport = useThree(state => state.viewport);
  const [, api] = useSphere(() => ({ type: 'Kinematic', args: 2 }));
  return useFrame(state =>
    api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 2.5)
  );
}

function Plane(props) {
  usePlane(() => props);
  return null;
}

const Ball = (props: Props) => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        zIndex: 0
      }}
      dpr={1.5}
      gl={{ alpha: true, stencil: false, depth: false, antialias: true }}
      camera={{ position: [0, 0, 20], fov: 35, near: 10, far: 40 }}
      onCreated={state => {
        state.gl.toneMappingExposure = 1.5;
      }}
    >
      <ambientLight intensity={0.75} />
      <spotLight position={[20, 20, 25]} penumbra={1} angle={0.1} color="#00F0FF" />
      <directionalLight position={[100, -80, -40]} intensity={18} color="#FF4161" />
      <directionalLight position={[0, -15, -0]} intensity={13} color="#353197" />
      <Physics gravity={[0, 0, 0]} iterations={1} broadphase="SAP">
        <Plane position={[0, -4, -4]} rotation={[-Math.PI / 2, 0, 0]} />
        <Plane position={[0, 4, -4]} rotation={[Math.PI / 2, 0, 0]} />
        <Plane position={[0, 0, 0]} rotation={[0, 0, 0]} />
        <Plane position={[0, 0, 8]} rotation={[0, -Math.PI, 0]} />
        <Pointer />
        {baubles.map((props, i) => <Bauble key={i} {...props} />) /* prettier-ignore */}
      </Physics>
      <EffectComposer multisampling={4}>
        <SSAO
          samples={11}
          radius={30}
          //@ts-ignore
          intensity={30}
          luminanceInfluence={0.6}
          color="black"
        />
        <SSAO
          samples={21}
          radius={5}
          //@ts-ignore
          intensity={30}
          luminanceInfluence={0.6}
          color="black"
        />
      </EffectComposer>
    </Canvas>
  );
};

export default Ball;
