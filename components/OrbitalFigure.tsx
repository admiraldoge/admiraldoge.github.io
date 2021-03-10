import * as React from 'react'
import {animated, useSpring} from 'react-spring'
import {useEffect, useState} from "react";

type OrbitalCircleProps = {
    idx: number,
    x?: number,
    y?: number,
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
    const [figures, setFigures] = useState(0);

    const [firstRotation, setFirstRotation] = useState({
        rotation: randomRotation(0)
    })

    useEffect(() => {
        setSpring({rotation: randomRotation(0)});
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            let nextRotation = randomRotation(firstRotation.rotation);
            setSpring({rotation: nextRotation});
            setFigures(nextRotation);
        }, 15000);

        return () => clearInterval(interval);
    }, [figures]);

    const [spring,setSpring] = useSpring(() => ({
        rotation: 0,
        config: {mass: 1, tension: 5, friction: 50}
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
        transform: `translate3d(${x}px,${y}px,${z}px) rotate(${randomRotation(0)}deg)`,
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

const randomRotation = (rotation) => {
    let newRotation = Math.floor(Math.random() * ((rotation+360) - (rotation-360))) + (rotation-360);
    return newRotation;
}

export default OrbitalFigure;