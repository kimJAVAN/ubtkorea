import React, {forwardRef, useEffect, useRef} from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/scrollTrigger';

export const EarthThreeD = forwardRef(({ isRotating, rotation, earthRotationSet,  ...props }, ref) => {
    const { nodes, materials } = useGLTF('Model/earth.glb');
    const groupRef = useRef();
    
    //console.log(isRotating,'로테이팅입니당')

    useFrame((state, delta) => {
        // 매 프레임마다 객체를 자전시킵니다. isRotating이 true일 때만 회전
        if (groupRef.current && isRotating) {
            groupRef.current.rotation.z += delta * -0.3;
        }
    });

    useEffect(() => {
        if (groupRef.current) {
            gsap.to(groupRef.current.rotation, {
                x: earthRotationSet[0],
                y: earthRotationSet[1],
                z: earthRotationSet[2],
                duration: 2,
                ease: "power2.inOut"
            });
        }
    }, [earthRotationSet]);

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <group
                position={props.position}
                rotation={props.rotation}
                earthRotationSet={props.earthRotationSet}
                scale={props.scale}
            >
                <mesh
                    geometry={nodes.Sphere_Material001_0.geometry}
                    material={materials['Material.001']}
                />
            </group>
        </group>
    );
});

useGLTF.preload('Model/earth.glb');
