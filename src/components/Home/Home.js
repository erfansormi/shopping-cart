import React from 'react'

//components
import Banner from './Banner'
import Slider from './Slider'
import Nav from "../Nav/Nav"
import Footer from './Footer'

//style
import styles from "./Home.module.css"

//title
import { Title } from '../../Hooks/Title'

const Home = () => {
    Title("Home")

    return (
        <>
            <Nav />
            <main className={styles.main}>
                <Banner />
                <Slider />
                <Footer />
            </main>
        </>
    )
}

export default Home