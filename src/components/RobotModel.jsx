import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

const RobotModel = ({ rotationY, scale = 3.0, position = [0, -1.0, 0] }) => {
    const group = useRef();
    const { scene } = useGLTF('/assets/optimus_prime.glb');

    return (
        <motion.group ref={group} rotation-y={rotationY} dispose={null}>
            <primitive object={scene} scale={scale} position={position} />
        </motion.group>
    );
};

useGLTF.preload('/assets/optimus_prime.glb');

export default RobotModel;
