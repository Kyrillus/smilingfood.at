import React, {useState} from 'react';
import * as THREE from "three";
import Image from "next/image";
import Header from "../menu/header";
import {useRef} from "react";
import {Donut} from "../3d-models/donut"
import {Pancake} from "../3d-models/pancake";
import {Cupcake} from "../3d-models/cupcake";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {useGLTF, Environment} from "@react-three/drei";
import {DepthOfField, EffectComposer} from "@react-three/postprocessing";
import LandingOverlay from "./landing-overlay";


function Landing({speed = 0.9, count = 65, depth = 80, easing = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2))}) {
    return (
        <div id="landing">
            <LandingOverlay/>
            <section className="h-screen w-full min-h-[55em] bg-[#ffbaba] overflow-hidden">
                <Canvas gl={{antialias: true, toneMapping: THREE.NoToneMapping}}
                        className="overscroll-none z-0" dpr={[1, 1.5]}
                        camera={{position: [0, 0, 10], fov: 12, near: 0.01, far: depth + 15}}>
                    <spotLight position={[10, 20, 40]} penumbra={1} intensity={3} color="#51364d"/>
                    <Environment preset="sunset"/>
                    {Array.from({length: count}, (_, i) => (
                        <Pancake key={i} index={i} z={Math.round(easing(i / count) * depth + 15 )} speed={speed}/>))}
                    {/*
                    {Array.from({length: count / 3}, (_, i) => (
                        <Donut key={i} index={i} z={Math.round(easing(i / count) * depth + 15)} speed={speed}/>))}

                    {Array.from({length: count / 3}, (_, i) => (
                        <Cupcake key={i} index={i} z={Math.round(easing(i / count) * depth + 15)} speed={speed}/>))} */}
                    <EffectComposer multisampling={0}>
                        <DepthOfField target={[0, 0, 80]} focalLength={0.2} bokehScale={6} height={700}/>
                    </EffectComposer>
                </Canvas>
            </section>
        </div>
    );
}

export default Landing;