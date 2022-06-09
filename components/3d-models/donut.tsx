import React, {useRef, useState} from "react";
import {useGLTF} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import * as THREE from "three";

export function Donut({ index, z, speed }) {
    const ref = useRef(null);
    const { nodes, materials } = useGLTF('/donut.glb')
    const {viewport, camera} = useThree();
    const {width, height} = viewport.getCurrentViewport(camera, [0, 0, -z])

    const [data] = useState({
        x: THREE.MathUtils.randFloatSpread(2),
        y: THREE.MathUtils.randFloatSpread(height),
        spin: THREE.MathUtils.randFloat(8, 12),
        rX: Math.random() * Math.PI,
        rZ: Math.random() * Math.PI
    })
    useFrame((state, dt) => {
        if (dt < 0.1) ref.current.position.set(index === 0 ? 0 : data.x * width, (data.y += dt * speed), -z)
        // Rotate the object around
        ref.current.rotation.set((data.rX += dt / data.spin), Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI, (data.rZ += dt / data.spin))
        // If they're too far up, set them back to the bottom
        if (data.y > height * (index === 0 ? 4 : 1)) data.y = -(height * (index === 0 ? 4 : 1))
    })

    return (
        <group ref={ref} dispose={null} distances={[0, 0, -30]}>
            <group rotation={[1.5, 0.04, 2.9]} scale={1.6}>
                <mesh geometry={nodes.Cylinder002.geometry} material={materials['sprinkles bake']} material-emissive="#efc0c0"/>
                <mesh geometry={nodes.Cylinder002_1.geometry} material={materials.donut}  material-emissive="#1d0d06"/>
                <mesh geometry={nodes.Cylinder002_2.geometry} material={materials.icing} material-emissive="#30211b"/>
            </group>
        </group>
    );
}

useGLTF.preload('/donut.glb')