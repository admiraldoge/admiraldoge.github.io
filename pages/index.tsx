import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/index.module.scss'
import GeometricAnimationContainer from "../components/GeometricAnimationContainer";
import Projects from "../components/Projects";

const Index: React.FunctionComponent = () => {
    return (
        <Layout title="Home">
            <Title text={"Hi my name is Maximilian Vino"}/>
            <GeometricAnimationContainer/>
            <Projects/>
        </Layout>
    )
}

const Title = ({text}) => {
    return (
        <div className={styles.title}>{text}</div>
    )
};
export default Index