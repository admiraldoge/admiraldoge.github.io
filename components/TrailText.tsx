import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Projects.module.scss'
import 'antd/dist/antd.css';
import {Col, Row} from "antd";
import {useTrail, animated} from "react-spring";
import {useEffect, useState} from "react";
import {namedTypes} from "ast-types";

type TrailTextProps = {
    minY: number,
    maxY: number
}

const TrailText: React.FunctionComponent<TrailTextProps> = ({minY,maxY, children}) => {
    const [showText, setShowText] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    function logit() {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
            if(scrollY > minY){
                setShowText(true);
            }
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });
    return (
        <Row align={"middle"} justify={"center"}>
            <Col span={24}>
                <Trail showText={showText} onClick={() => setShowText((state) => !state)}>
                    {children}
                </Trail>
            </Col>
        </Row>
    )
}

function Trail({ showText, children, ...props }) {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 2, tension: 400, friction: 100},
        opacity: showText ? 1 : 0,
        x: showText ? 0 : 20,
        height: showText ? 60 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    // @ts-ignore

    const cntStyles = {
        minHeight: (items.length*60)+"px"
    }

    return (
        <div style={cntStyles} {...props}>
            {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                    key={items[index]['key']}
                    className="trails-text"
                    style={{ ...rest, transform: x.interpolate((x?) => `translate3d(0,${x}px,0)`) }}>
                    <animated.div style={{ height }}>
                        <Row justify={"center"}>
                            {items[index]}
                        </Row>
                    </animated.div>
                </animated.div>
            ))}
        </div>
    )
}
export default TrailText