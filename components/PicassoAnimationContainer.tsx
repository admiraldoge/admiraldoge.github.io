import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/PicassoAnimationContainer.module.scss'
import LostFigure from "./LostFigure";
import OrbitalFigure from "./OrbitalFigure";
import Orbit from "./Orbit";
import OrbitalAnimation from "./OrbitalAnimation";
import ScrollableLinearFigure from "./ScrollableLinearFigure";
const PicassoAnimationContainer: React.FunctionComponent = ({}) => (
    <div className={styles.ctn}>
        <OrbitalAnimation
            idx={3}
            radius={50}
            figureSize={20}
            translateX={1000}
            translateY={200}
            orbitProps={{color:"#05244D", width:2}}
            figureProps={{type: "circle", color:"#a02921"}}
        />
        <OrbitalAnimation
            idx={3}
            radius={100}
            figureSize={20}
            translateX={900}
            translateY={140}
            orbitProps={{color:"#05244D", width:2}}
            figureProps={{type: "circle", color:"#a02921"}}
        />
        <OrbitalAnimation
            idx={3}
            radius={150}
            figureSize={20}
            translateX={800}
            translateY={120}
            orbitProps={{color:"#05244D", width:2}}
            figureProps={{type: "triangle", color:"#a02921"}}
        />
    <ScrollableLinearFigure idx={1} type={"circle"} color={"#a02921"} startX={1000} startY={200} endX={1000} endY={900} minScroll={0} maxScroll={900} figureSize={80}/>
    <ScrollableLinearFigure idx={1} type={"circle"} color={"#a02921"} startX={500} startY={600} endX={900} endY={600} minScroll={0} maxScroll={900} figureSize={80}/>
    <ScrollableLinearFigure idx={1} type={"circle"} color={"#a02921"} startX={300} startY={300} endX={600} endY={600} minScroll={0} maxScroll={900} figureSize={80}/>
    </div>
)
export default PicassoAnimationContainer