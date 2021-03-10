import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/ContactMe.module.scss'
import 'antd/dist/antd.css';
import {Col, Row} from "antd";
const ContactMe: React.FunctionComponent = ({}) => (
    <div className={styles.ctn}>
        <Row align={"middle"} justify={"center"}>
            <Col span={24}>
                <Row justify={"center"}>
                    <h1>Contact me</h1>
                </Row>
                <Row>
                    <Col span={12}>
                        <Row>
                            <Col span={8}>
                                logo1
                            </Col>
                            <Col span={8}>
                                logo2
                            </Col>
                            <Col span={8}>
                                logo3
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>

                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
)
export default ContactMe