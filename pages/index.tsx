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
                <PicassoAnimationContainer>
                    <Title text={"Hi, I am Maximilian"}/>
                    <AboutMe/>
                    <Projects/>
                    <ContactMe/>
                </PicassoAnimationContainer>
            </div>
        </Layout>
    )
}

const Title = ({text}) => {
    return (
        <div className={styles.titleCtn}>
            <div className={styles.title}>
                {text}
            </div>
        </div>
    )
};
export default Index