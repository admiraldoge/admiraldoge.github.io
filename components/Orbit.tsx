import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Orbit.module.scss'
import 'antd/dist/antd.css';
import {Col, Row} from "antd";

type OrbitProps = {
    idx: number,
    radius: number,
    width?: number,
    translateX?: number,
    translateY?: number,
    color: string
}
const Orbit: React.FunctionComponent<OrbitProps> = ({idx,radius,translateX=0,translateY=0,color,width=1}) => (

    <div className={styles.orbit} style={OrbitStyle(translateX,translateY,radius,width,color)}>

    </div>
)
const OrbitStyle = (x,y,r,w,c):object => {
    return {
        transform: `translate3d(${x}px,${y}px,0)`,
        width: `${r*2}px`,
        height: `${r*2}px`,
        borderWidth: `${w}px`,
        borderRadius: `${r}px`,
        borderColor: `${c}`
    }
}
export default Orbit