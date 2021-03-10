import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/index.module.scss'
import GeometricAnimationContainer from "../components/GeometricAnimationContainer";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import PicassoAnimationContainer from "../components/PicassoAnimationContainer";

const Index: React.FunctionComponent = () => {
    return (
        <Layout title="Home">
            <div className={styles.ctn}>
                <Title text={"Hi, this is the Nash project."}/>
                <PicassoAnimationContainer/>
                <GeometricAnimationContainer/>
                <AboutMe/>
                <Projects/>
                <ContactMe/>
            </div>
        </Layout>
    )
}

const Title = ({text}) => {
    return (
        <div className={styles.title}>{text}</div>
    )
};
export default Index