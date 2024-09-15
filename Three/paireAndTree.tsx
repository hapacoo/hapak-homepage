// // import React, { useRef } from 'react';
// // import { Canvas, MeshProps, useFrame, useThree } from '@react-three/fiber';
// // import { OrbitControls } from '@react-three/drei';
// // import * as THREE from 'three';

// // const Poire: React.FC = () => {
// //   const bottomRef = useRef<THREE.Mesh>(null);
// //   const topRef = useRef<THREE.Mesh>(null);
// //   const stemRef = useRef<THREE.Mesh>(null);
// //   const leafRef = useRef<THREE.Mesh>(null);

// //   useFrame(() => {
// //     if (bottomRef.current) bottomRef.current.rotation.y += 0.01;
// //     if (topRef.current) topRef.current.rotation.y += 0.01;
// //     if (stemRef.current) stemRef.current.rotation.y += 0.01;
// //     if (leafRef.current) leafRef.current.rotation.y += 0.01;
// //   });

// //   return (
// //     <group scale={[0.6, 0.6, 0.6]} position={[2.5, 0.3, 0]}>
// //       <mesh ref={bottomRef as MeshProps['ref']}>
// //         <dodecahedronGeometry args={[2, 1]} />
// //         <meshStandardMaterial color={0xe0f542} />
// //       </mesh>
// //       <mesh ref={topRef as MeshProps['ref']} position={[0, 1.6, 0]}>
// //         <tetrahedronGeometry args={[1.3, 3]} />
// //         <meshStandardMaterial color={0xe0f542} />
// //       </mesh>
// //       <mesh ref={stemRef as MeshProps['ref']} position={[0, 3, 0]}>
// //         <cylinderGeometry args={[0.1, 0.1, 0.9]} />
// //         <meshStandardMaterial color={0x703411} />
// //       </mesh>
// //       <mesh
// //         ref={leafRef as MeshProps['ref']}
// //         position={[-0.5, 3, -0.1]}
// //         rotation={[0, 0, Math.PI / -2]}
// //       >
// //         <sphereGeometry args={[0.5, 32, 16, 0, Math.PI / 3]} />
// //         <meshStandardMaterial color={0x22ba3b} side={THREE.DoubleSide} />
// //       </mesh>
// //     </group>
// //   );
// // };

// // const Tree: React.FC = () => {
// //   const trunkRefs = useRef<THREE.Mesh[]>([]);
// //   const leafRefs = useRef<THREE.Mesh[]>([]);

// //   useFrame(() => {
// //     trunkRefs.current.forEach((mesh) => {
// //       if (mesh) mesh.rotation.y += 0.005;
// //     });
// //     leafRefs.current.forEach((mesh) => {
// //       if (mesh) mesh.rotation.y += 0.005;
// //     });
// //   });

// //   return (
// //     <group>
// //       <group>
// //         {[0, 1, 2, 3].map((i) => (
// //           <mesh
// //             key={i}
// //             ref={(el) => (trunkRefs.current[i] = el!)}
// //             position={[i * 0.1, i * 1.2, 0]}
// //             scale={[1 - i * 0.1, 1 - i * 0.1, 1 - i * 0.1]}
// //             rotation={[0, 0, THREE.MathUtils.degToRad(-5 * i)]}
// //           >
// //             <cylinderGeometry args={[0.8, 1, 1.5]} />
// //             <meshStandardMaterial color={0x703411} />
// //           </mesh>
// //         ))}
// //       </group>
// //       <group
// //         position={[-0.4, 0, 0]}
// //         rotation={[0, 0, THREE.MathUtils.degToRad(-10)]}
// //       >
// //         {[0, 1, 2, 3].map((i) => (
// //           <mesh
// //             key={i}
// //             ref={(el) => (leafRefs.current[i] = el!)}
// //             position={[i % 2 === 0 ? 0 : i === 1 ? 2 : -2, 3.2, i < 2 ? 2 : -2]}
// //             rotation={[Math.PI / -2, 0, i % 2 === 0 ? 0 : Math.PI / 2]}
// //           >
// //             <sphereGeometry args={[2, 32, 16, Math.PI / 3, Math.PI / 3]} />
// //             <meshStandardMaterial color={0x22ba3b} side={THREE.DoubleSide} />
// //           </mesh>
// //         ))}
// //       </group>
// //     </group>
// //   );
// // };

// // const Scene: React.FC = () => {
// //   const { camera } = useThree();

// //   React.useEffect(() => {
// //     camera.position.set(15, 10, 5);
// //     camera.lookAt(0, 0, 0);
// //   }, [camera]);

// //   return (
// //     <>
// //       <color attach="background" args={[0xa8daf9]} />
// //       <ambientLight intensity={0.5} />
// //       <directionalLight position={[1, 2, 3]} intensity={2} />
// //       <Poire />
// //       <Tree />
// //       <axesHelper args={[10]} />
// //       <OrbitControls />
// //     </>
// //   );
// // };

// // const ThreeScene: React.FC = () => {
// //   return (
// //     <Canvas style={{ width: '100%', height: '100vh' }}>
// //       <Scene />
// //     </Canvas>
//   );
// };

// export default ThreeScene;
