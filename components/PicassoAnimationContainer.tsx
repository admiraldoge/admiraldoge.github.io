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
            idx={2}
            radius={250}
            figureSize={80}
            translateX={-250}
            translateY={-250}
            orbitProps={{color:"#05244D", width:2}}
            figureProps={{type: "circle", color:"#a02921"}}
        />
        <OrbitalAnimation
            idx={2}
            radius={300}
            figureSize={80}
            translateX={100}
            translateY={140}
            orbitProps={{color:"#05244D", width:2}}
            figureProps={{type: "circle", color:"#a02921"}}
        />
        <OrbitalAnimation
            idx={2}
            radius={400}
            figureSize={80}
            translateX={600}
            translateY={-400}
            orbitProps={{color:"#05244D", width:2}}
            figureProps={{type: "circle", color:"#a02921"}}
        />
        <OrbitalAnimation
            idx={1}
            radius={150}
            figureSize={80}
            translateX={700}
            translateY={450}
            orbitProps={{color:"#05244D", width:2}}
            figureProps={{type: "triangle", color:"#a02921"}}
        />
    </div>
)
export default PicassoAnimationContainer