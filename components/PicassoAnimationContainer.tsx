import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/PicassoAnimationContainer.module.scss'
import LostFigure from "./LostFigure";
import OrbitalFigure from "./OrbitalFigure";
import Orbit from "./Orbit";
const PicassoAnimationContainer: React.FunctionComponent = ({}) => (
    <div className={styles.ctn}>
        <Orbit idx={0} radius={250} width={2} translateX={-250} translateY={-250} color={'#05244D'}/>
        <OrbitalFigure idx={0} radius={290} x={100} y={100} translateX={-300} translateY={-50} type={"circle"} color={"#a02921"} figureSize={80}/>
        <Orbit idx={0} radius={300} width={2} translateX={100} translateY={140} color={'#05244D'}/>
        <OrbitalFigure idx={1} radius={340} x={100} y={100} translateX={60} translateY={400} translateZ={100} type={"circle"} color={"#a02921"} figureSize={80}/>
        <Orbit idx={1} radius={400} width={2} translateX={600} translateY={-400} color={'#05244D'}/>
        <Orbit idx={2} radius={150} width={2} translateX={700} translateY={450} color={'#05244D'}/>
        <OrbitalFigure idx={1} radius={190} x={100} y={100} translateX={650} translateY={550} type={"triangle"} color={"#a02921"} figureSize={80}/>
    </div>
)
export default PicassoAnimationContainer