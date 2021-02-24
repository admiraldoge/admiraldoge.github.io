import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/LostFigure.module.scss'
import {useTransition, animated} from 'react-spring'
import {useEffect, useState} from "react";

type LostFigureProps = {
    initialPositionX: number,
    initialPositionY: number,
    type: string,
    color: string
}

const LostFigure: React.FunctionComponent<LostFigureProps> = ({ initialPositionX,initialPositionY,type, color}) => {
    const [endPosition, setEndPosition] = useState({
        x: Math.floor(Math.random() * (400 - (-400) + 1)) + (-400),
        y: Math.floor(Math.random() * (400 - (-400) + 1)) + (-400)
    });
    useEffect(() => {
        let endX = Math.floor(Math.random() * window.innerWidth);
        let endY = Math.floor(Math.random() * window.innerHeight);
        console.log('End position ',endX,'-',endY);
        setEndPosition({
            x: endX,
            y: endY
        });

    }, []);

    const transition = useTransition(null, null, {
        config: {mass:1, tension:4, friction:50},
        from: { transform: 'translate3d('+initialPositionX+'px,'+ initialPositionY+'px,0)',opacity: 0  },
        enter: { transform: 'translate3d('+(initialPositionX+endPosition.x)+','+(initialPositionY+endPosition.y)+'px,0)',width: '100px', opacity: 1 },
        leave: { transform: 'translate3d('+initialPositionX+','+initialPositionY+'px,0)',
            width: '200px',
            opacity: 0
        }
    });
    return transition.map(({ item, props, key }) =>
        <animated.div key={1} style={props}>
            <Figure
                type={type}
                color={color}
            />
        </animated.div>
    )
}

const Figure = ({type,color}) => {
    switch (type) {
        case "circle":
            return <Circle color={color}/>;
            break;
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
export default LostFigure