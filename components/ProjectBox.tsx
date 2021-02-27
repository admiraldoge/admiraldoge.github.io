import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/ProjectBox.module.scss'
import 'antd/dist/antd.css';
import {Col, Row, Image} from "antd";
import {useEffect, useState} from "react";
import {animated, useSpring, useTransition} from "react-spring";
const ProjectBox: React.FunctionComponent = ({}) => {
    const [scrollY, setScrollY] = useState(0);

    function logit() {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
            if(scrollY > 500 || scrollY < 120){
                console.log('Hide');
                setSpring({xy: [-window.innerWidth/9, 0]});
            }else if(scrollY > 120) {
                console.log('Show');
                setSpring({xy: [window.innerWidth/9, 0]})
            }
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });

    const [spring,setSpring] = useSpring(() => ({
        xy: [0,0],
        config: {mass: 1, tension: 30, friction: 30}
    }))

    const trans = (x?, y?):string => {
        //console.log('Transform to ',x,y);
        return `translate3d(${x}px,${y}px,0)`;
    }

    return (
        <div>
            <animated.div style={{
                transform: spring.xy.interpolate(trans)
            }}>
                <Image
                    width={400}
                    src={"https://www.icreatemagazine.nl/app/uploads/2021/01/iPad-pro-2021-maart-750x422.jpg"}
                />
            </animated.div>
        </div>
    )
}
export default ProjectBox