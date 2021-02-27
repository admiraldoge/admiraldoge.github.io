import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Projects.module.scss'
import 'antd/dist/antd.css';
import {Col, Row} from "antd";
import ProjectBox from "./ProjectBox";
const Projects: React.FunctionComponent = ({}) => (
    <div className={styles.ctn}>
        <Row align={"middle"} justify={"center"}>
            <Col span={24}>
                <Row justify={"center"}>
                    <h1>My art</h1>
                </Row>
                <Row>
                    <Col span={12}>
                        <ProjectBox/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
)
export default Projects