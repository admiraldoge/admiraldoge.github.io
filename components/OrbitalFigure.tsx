import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/OrbitalCircle.module.scss'
import {animated, useSpring} from 'react-spring'
import {useEffect, useState} from "react";
import WindowDimensions from "../utils/WindowDimensions";


type OrbitalCircleProps = {
    idx: number,
    x: number,
    y: number,
    radius: number,
    translateX?: number,
    translateY?: number,
    translateZ?: number,
    figureSize: number,
    type: string,
    color: string
}

const OrbitalFigure: React.FunctionComponent<OrbitalCircleProps>
    = ({idx,radius,x,y,type, color, translateX= 0, translateY= 0,translateZ=0,figureSize}) => {
    const [figures, setFigures] = useState({
        rotation: 0,
        key: idx
    });

    const [firstPosition, setFirstPosition] = useState({
        rotation: 0
    })

    useEffect(() => {
        setSpring({rotation: 180});
        const interval = setInterval(() => {
            let nextTranslate = randomPosition(firstPosition.rotation);
            setFigures({
                rotation: nextTranslate,
                key: idx
            })
            setSpring({rotation: nextTranslate});
        }, 10000000);

        return () => clearInterval(interval);
    }, [figures]);

    const [spring,setSpring] = useSpring(() => ({
        rotation: [0],
        config: {mass: 1, tension: 6, friction: 50}
    }))

    const trans = (rotation?):string => {
        return `translate3d(${translateX}px,${translateY}px,${translateZ}px) rotate(${rotation}deg)`;
    }

    return <animated.div
        style={
            {
                ...HandStyle(translateX,translateY,translateZ,radius,figureSize),
                ...{transform: spring.rotation.interpolate(trans)}
            }
        }
    >
        <Figure
            type={type}
            color={color}
            size={figureSize}
        />
    </animated.div>

}

const Figure = ({type,color,size}) => {
    switch (type) {
        case "circle":
            return <Circle color={color} size={size}/>
            break;
        case "triangle":
            return <Triangle color={color} size={size}/>
    }
}

const HandStyle = (x,y,z,r,s):object => {
    return {
        position: 'absolute',
        transform: `translate3d(${x}px,${y}px,${z}px)`,
        width: `${r*2}px`,
        textAlign: 'end',
        justifyContent: 'end',
        height: `${s}px`
    }
}

const FigureStyle = () => {
    return {
        transform: 'translate3d(0px,0px,500px) perspective(200px)',
    };
};


const Circle = ({color,size}) => {
    return (
        <svg style={FigureStyle()} height={size} width={size}>
            <circle cx={size/2} cy={size/2} r={size/2} fill={color} />
        </svg>
    )
}

const Triangle = ({color,size}) => {
    return (
        <svg height={size} width={size}>
            <polygon points={`${size/2},${0} ${size},${size} ${0},${size}`} stroke={color} strokeWidth="2" fill={color}/>
        </svg>
    )
}

const randomPosition = (rotation) => {
    let newRotation = Math.floor(Math.random() * ((260) - (0))) + (0);
    return newRotation;
}

export default OrbitalFigure;