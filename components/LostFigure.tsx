import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/LostFigure.module.scss'
import {animated, useSpring} from 'react-spring'
import {useEffect, useState} from "react";
import WindowDimensions from "../utils/WindowDimensions";


type LostFigureProps = {
    idx: number,
    type: string,
    color: string
}

const LostFigure: React.FunctionComponent<LostFigureProps> = ({ idx,type, color}) => {
    const [figures, setFigures] = useState({
        x: 0,
        y: 0,
        key: idx
    });

    const [firstPosition, setFirstPosition] = useState({
        x: 0,
        y: 0
    })
    useEffect(() => {
        let firstX = Math.floor(Math.random() * window.innerWidth-50);
        let firstY = Math.floor(Math.random() * window.innerHeight-50);
        setFirstPosition({
            x: firstX,
            y: firstY
        })
    },[])

    useEffect(() => {
        let aux = randomPosition(firstPosition.x,firstPosition.y,window.innerWidth,window.innerHeight);
        setSpring({xy: [aux.x,aux.y]});
        const interval = setInterval(() => {
            let nextTranslate = randomPosition(firstPosition.x,firstPosition.y,window.innerWidth,window.innerHeight);
            setFigures({
                x: firstPosition.x + nextTranslate.x,
                y: firstPosition.y + nextTranslate.y,
                key: idx
            })
            let newXY = [nextTranslate.x,nextTranslate.y];
            if(!newXY) alert('NEW XY IS NOT WORKING OK');
            setSpring({xy: newXY});
        }, 5000);

        return () => clearInterval(interval);
    }, [figures]);

    const [spring,setSpring] = useSpring(() => ({
        xy: [0,0],
        config: {mass: 1, tension: 6, friction: 50}
    }))

    const trans = (x, y):string => {
        return `translate3d(${x}px,${y}px,0) rotate(${x}deg)`;
    }

    return <animated.div
        style={
            {
                ...CircleStyles(firstPosition.x,firstPosition.y),
                ...{transform: spring.xy.interpolate(trans)}
            }
        }
    >
        <Figure
            type={type}
            color={color}
        />
    </animated.div>

}

const Figure = ({type,color}) => {
    switch (type) {
        case "circle":
            return <Circle color={color}/>;
            break;
        case "triangle":
            return <Triangle color={color}/>
    }
}

const CircleStyles = (x,y) => {
    return {
        position: 'absolute',
        left: x,
        top: y,
        transform: 'rotate(0deg)'
    }
}

const Circle = ({color}) => {
    return (
        <div className={styles.circle}>
            <svg height="100" width="100">
                <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="1" fill={color} />
            </svg>
        </div>
    )
}

const Triangle = ({color}) => {
    return (
        <div className={styles.circle}>
            <svg height="100" width="100">
                <polygon points="20,70 80,70 50,20" stroke={color} strokeWidth="2" fill={color}/>
            </svg>
        </div>
    )
}

const randomPosition = (x,y,X,Y) => {
    let newX = Math.floor(Math.random() * ((X-x-90) - (-x))) + (-x);
    let newY = Math.floor(Math.random() * ((Y-y-90) - (-y))) + (-y);
    return {
        x: newX,
        y: newY
    }
}
export default LostFigure