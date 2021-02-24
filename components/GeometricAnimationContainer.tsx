import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/GeometricAnimationContainer.module.scss'
import LostFigure from "./LostFigure";
const GeometricAnimationContainer: React.FunctionComponent = ({}) => (
    <div className={styles.ctn}>
        <LostFigure initialPositionX={400} initialPositionY={400} type={'circle'} color={'#FFECCC'}/>
        <LostFigure initialPositionX={200} initialPositionY={200} type={'circle'} color={'#E49D23'}/>
        <LostFigure initialPositionX={400} initialPositionY={40} type={'circle'} color={'#8B7356'}/>
    </div>
)
export default GeometricAnimationContainer