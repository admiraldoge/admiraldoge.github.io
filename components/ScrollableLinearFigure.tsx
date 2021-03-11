import * as React from 'react'
import styles from '../styles/ScrollableLinearFigure.module.scss'
import {animated, useSpring} from 'react-spring'
import {useEffect, useState} from "react";

type ScrollableLinearFigureProps = {
    idx: number,
    type: string,
    color: string,
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    minScroll: number,
    maxScroll: number,
    figureSize: number
}

const ScrollableLinearFigure: React.FunctionComponent<ScrollableLinearFigureProps>
    = ({ idx,type,figureSize, color, startX, startY,endX,endY,minScroll, maxScroll}) => {
    const [figures, setFigures] = useState({
        x: 0,
        y: 0,
        key: idx
    });
    
    const ratioY = (endY-startY)/(maxScroll-minScroll);
    const ratioX = (endX-startX)/(maxScroll-minScroll);

    const [scrollY, setScrollY] = useState(0);

    function logit() {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
            console.log('scrollY: ',scrollY);
            console.log('ratios: ',ratioX,ratioY)
            let transx = transX(scrollY,ratioX);
            let transy = transY(scrollY,ratioY);
            console.log('trans: ',transx,transy);
            if(ratioX === 0) {
                setSpring({xy: [startX,startY + transy]})
            } else if(ratioY === 0) {
                setSpring({xy: [startX + transx, startY]})
            } else {
                setSpring({xy: [startX + transx, startY + transy]})
            }
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });

    const [spring,setSpring] = useSpring(() => ({
        xy: [0,0],
        config: {mass: 1, tension: 100, friction: 50}
    }))

    const trans = (x?, y?):string => {
        return `translate3d(${x}px,${y}px,0)`;
    }

    return <animated.div
        style={
            {
                ...figureStyle(startX,startY),
                ...{transform: spring.xy.interpolate(trans)}
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
const figureStyle = (x,y):object => {
    return {
        position: 'absolute',
        transition: `translate3d(${x}px,${y}px,0)`,
    }
}

const Figure = ({type,color,size}) => {
    switch (type) {
        case "circle":
            return <Circle color={color} size={size}/>;
            break;
        case "triangle":
            return <Triangle color={color} size={size}/>
    }
}

const Circle = ({color,size}) => {
    return (
        <svg className={styles.figure} height={size} width={size}>
            <circle cx={size/2} cy={size/2} r={size/2} fill={color} />
        </svg>
    )
}

const Triangle = ({color,size}) => {
    return (
        <svg className={styles.figure} height={size} width={size}>
            <polygon points={`${size/2},${0} ${size},${size} ${0},${size}`} stroke={color} strokeWidth="2" fill={color}/>
        </svg>
    )
}

const transX = (scrollX, ratio) => {
    return scrollX*ratio;
}
const transY = (scrollY, ratio) => {
    return scrollY*ratio;
}
export default ScrollableLinearFigure