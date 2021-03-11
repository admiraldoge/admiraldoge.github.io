import * as React from 'react'
import {animated, useSpring} from 'react-spring'
import {useEffect, useState} from "react";
import styles from '../styles/DeveloperAnimation.module.scss'

const DeveloperAnimation: React.FunctionComponent = () => {
    const [figures, setFigures] = useState(0);

    return (
        <img className={styles.animation} src={'./svg/me.svg'}/>
    )

}

export default DeveloperAnimation;