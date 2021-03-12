import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/ContactMe.module.scss'
import 'antd/dist/antd.css';
import {Col, Row} from "antd";
import Triangle from "./figures/Triangle";
import Circle from "./figures/Circle";
const ContactMe: React.FunctionComponent = ({}) => (
    <div className={styles.ctn}>
        <Circle style={{top: 0, position: "absolute", transform: "translate3d(650px,50px,0)"}} size={200} color={'#e93b38'} opacity={0.9}/>
        <Circle style={{top: 0, position: "absolute", transform: "translate3d(400px,200px,0)"}} size={150} color={'#f8a83a'} opacity={0.9}/>
        <Triangle style={{bottom: 0, position: "absolute", transform: "translateX(-150px)"}} size={250} color={'#2f8983'} opacity={0.9}/>
        <Triangle style={{bottom: 0, position: "absolute", transform: "translateX(50px)"}} size={290} color={'#f8a83a'} opacity={0.9}/>
        <Triangle style={{bottom: 0, position: "absolute", transform: "translateX(200px)"}} size={250} color={'#e93b38'} opacity={0.9}/>
        <Triangle style={{bottom: 0, position: "absolute", transform: "translateX(400px)"}} size={200} color={'#216249'} opacity={0.9}/>
        <Triangle style={{bottom: 0, position: "absolute", transform: "translateX(660px)"}} size={240} color={'#f8a83a'} opacity={0.9}/>
        <Triangle style={{bottom: 0, position: "absolute", transform: "translateX(500px)"}} size={300} color={'#2f8983'} opacity={0.9}/>
        <Triangle style={{bottom: 0, position: "absolute", transform: "translateX(800px)"}} size={250} color={'#e93b38'} opacity={0.9}/>
        <Triangle style={{bottom: 0, position: "absolute", transform: "translateX(950px)"}} size={200} color={'#216249'} opacity={0.9}/>

    </div>
)
export default ContactMe