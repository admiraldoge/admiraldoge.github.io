import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/GeometricAnimationContainer.module.scss'
import LostFigure from "./LostFigure";
const GeometricAnimationContainer: React.FunctionComponent = ({}) => (
    <div className={styles.ctn}>
            <LostFigure idx={1} type={'circle'} color={'#FFEACE'}/>
            <LostFigure idx={2} type={'triangle'} color={'#DEEEEA'}/>
            <LostFigure idx={3} type={'circle'} color={'#EDFCFF'}/>
            <LostFigure idx={4} type={'circle'} color={'#FFEACE'}/>
            <LostFigure idx={5} type={'triangle'} color={'#DEEEEA'}/>
            <LostFigure idx={6} type={'circle'} color={'#EDFCFF'}/>
            <LostFigure idx={7} type={'circle'} color={'#FFEACE'}/>
            <LostFigure idx={8} type={'triangle'} color={'#DEEEEA'}/>
            <LostFigure idx={9} type={'circle'} color={'#EDFCFF'}/>
            <LostFigure idx={10} type={'circle'} color={'#FFEACE'}/>
            <LostFigure idx={11} type={'circle'} color={'#DEEEEA'}/>
            <LostFigure idx={12} type={'triangle'} color={'#EDFCFF'}/>
    </div>
)
export default GeometricAnimationContainer