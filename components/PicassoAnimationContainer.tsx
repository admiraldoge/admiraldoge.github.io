import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/PicassoAnimationContainer.module.scss'
import LostFigure from "./LostFigure";
import OrbitalFigure from "./OrbitalFigure";
import Orbit from "./Orbit";
import OrbitalAnimation from "./OrbitalAnimation";
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
    </div>
)
export default PicassoAnimationContainer