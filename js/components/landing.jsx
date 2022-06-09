import React, { useState } from 'react';
import * as THREE from "three";
import Header from "./header";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
function Box() {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    useFrame((state) => {
        ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, hovered ? 1 : 0, 0.1);
    });
    return (<mesh ref={ref} onPointerOver={() => hover(!hovered)} onPointerOut={() => hover(false)}>
            <boxGeometry />
            <meshBasicMaterial color={hovered ? 'hotpink' : 'orange'}></meshBasicMaterial>
        </mesh>);
}
function Landing() {
    return (<div>
            <section className="h-screen w-full min-h-screen bg-green-300 overflow-hidden">
                <Header />
                <Canvas className="overscroll-none ">
                    <Box />
                </Canvas>
            </section>
        </div>);
}
export default Landing;
