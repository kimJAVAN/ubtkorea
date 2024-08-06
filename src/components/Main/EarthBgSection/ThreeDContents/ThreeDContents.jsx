import React, { useRef, useEffect, useState } from 'react';
import {Canvas, useThree} from '@react-three/fiber';
import {useEnvironment, OrbitControls, Environment, PerspectiveCamera} from '@react-three/drei';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/scrollTrigger';
import { EarthThreeD } from "../EarthThreeD/EarthThreeD.jsx";
import {useControlled} from "@mui/material";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const ThreeDContents = ({ isRotating, earthRotationSet }) => {
    const light = useRef();
    const spotLight = useRef();
    const earthChange = useRef(); // Ref for EarthThreeD component

    const {camera} = useThree();

    const [earthPosition, setEarthPosition] = useState([0, 0, 0]);
    const [earthRotation, setEarthRotation] = useState([-4.1, -3.2, 3.4]);
    const [earthScale, setEarthScale] = useState([0.83, 0.83, 0.83]);

    const t0 = useRef()

    useGSAP(()=>{
        camera.position.set(11, 4, 24);

        const scrollTriggerConfig = {
            trigger: '.earth-bg-section',
            scrub: 1,
            // markers: true,
        };

        const animations = [
            { start: 300, end: 300, vars: { x: 5.25, y: 0, z: 24 } },
            { start: 1200, end: 1200, vars: { x: 0, y: 0.8, z: 4 } },
            { start: 5000, end: 5000, vars: { x: 0, y: 0, z: 5.5 } },
        ];

        animations.forEach(({ start, end, vars }) => {
            gsap.timeline({
                scrollTrigger: {
                    ...scrollTriggerConfig,
                    start: `${start}px center`,
                    end: `${end}px center`,
                }
            }).to(camera.position, {
                duration: 7,
                ease: "cubic-bezier(.12,.93,.8,.92)",
                ...vars,
            });
        });

    },[camera])

    return (
        <>
            {/*<OrbitControls enableZoom={false}/>*/}
            <Environment preset={"sunset"}/>
            {/*<axesHelper scale={10}/>*/}'
            <ambientLight />
            <spotLight
                position={[0, 0, 10]}
                distance={20}
                ref={spotLight}
                angle={Math.PI / 4}
                penumbra={0.05}
                color={"#ffffff"}
                intensity={1}
                castShadow
                shadow-mapSize={[2048, 2048]}
                target-position={[0, 0, 0]} // 여기가 수정된 부분입니다.
            />
            <directionalLight
                position={[0, 0, 10]}
                ref={light}
                intensity={30}
                target-position={[0, 0, 0]}
                color={"#d4d2f5"}
                castShadow
                shadow-mapSize={[2000, 2000]}
            />
            <EarthThreeD
                ref={earthChange}
                position={earthPosition}
                rotation={earthRotation}
                scale={earthScale}
                isRotating={isRotating}
                earthRotationSet={earthRotationSet}
            />
        </>
    );
};
