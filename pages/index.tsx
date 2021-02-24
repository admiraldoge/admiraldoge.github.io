import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/index.module.scss'
import AnimatedContainer from "../components/GeometricAnimationContainer";

const Index: React.FunctionComponent = () => {
    return (
        <Layout title="Home">
            <Title text={"Hola mi nombre es Maximilian Vino"}/>
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