import * as React from 'react'
import {animated, useSpring} from 'react-spring'
import {useEffect, useState} from "react";
import styles from '../styles/DeveloperAnimation.module.scss'

const DeveloperAnimation: React.FunctionComponent = () => {
    const [figures, setFigures] = useState(0);

    return (
        <div>
            <img className={styles.animation} src={'./svg/me.svg'}/>
        </div>
    )

}

export default DeveloperAnimation;