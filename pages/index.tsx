import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/index.module.scss'
import AnimatedContainer from "../components/GeometricAnimationContainer";

const Index: React.FunctionComponent = () => {
    return (
        <Layout title="Home">
            <Title text={"Hi my name is Maximilian Vino"}/>
            <AnimatedContainer>
            </AnimatedContainer>
        </Layout>
    )
}

const Title = ({text}) => {
    return (
        <div className={styles.title}>
            <h1>{text}</h1>
        </div>
    )
};
export default Index