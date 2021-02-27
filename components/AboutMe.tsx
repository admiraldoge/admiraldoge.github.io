import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/AboutMe.module.scss'
import 'antd/dist/antd.css';
import {Col, Row} from "antd";
import TrailText from "./TrailText";
const AboutMe: React.FunctionComponent = ({}) => (
    <div className={styles.ctn}>
        <Row align={"middle"} justify={"center"}>
            <Col span={12}>
                <Row justify={"center"}>
                    <Col span={24}>
                        <Row justify={"center"}>
                            <span className={styles.title}>About me</span>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <TrailText minY={400} maxY={600}>
                                    <span key={1} className={styles.description}>
                                        My name is Maximilian and I am a software engineer.
                                    </span>
                                    <span key={2} className={styles.description}>I like dogs.</span>
                                    <span key={3} className={styles.description}>I am a fullstack developer.</span>
                                    <span key={4} className={styles.description}>I try to put a bit of art into my work!</span>
                                </TrailText>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col span={12}>
                <Row justify={"center"}>
                    <h1>Animation</h1>
                </Row>
            </Col>
        </Row>
    </div>
)
export default AboutMe