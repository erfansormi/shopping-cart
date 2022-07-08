import React from 'react'
import { Link } from 'react-router-dom'

//css
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={`bg-dark`}>
            <div className={`container`}>
                <div className={`row ${styles.footer_list_container}`}>
                    <section className={`col-6 col-sm-6 col-md-4 col-xl mb-3 mb-md-0 col`}>
                        <ul>
                            <h5>
                                support
                            </h5>
                            <li>
                                <Link to={"/"}>contact us </Link>
                            </li>
                            <li>
                                <Link to={"/"}>FAQs </Link>
                            </li>
                            <li>
                                <Link to={"/"}>my account </Link>
                            </li>
                            <li>
                                <Link to={"/"}>store locator </Link>
                            </li>
                        </ul>
                    </section>
                    <section className={`col-6 col-sm-6 col-md-4 col-xl mb-3 mb-md-0 col`}>
                        <ul>
                            <h5>
                                gift card
                            </h5>
                            <li>
                                <Link to={"/"}>e-Gift cards</Link>
                            </li>
                            <li>
                                <Link to={"/"}>phisycal gift cards </Link>
                            </li>
                            <li>
                                <Link to={"/"}>check your balance </Link>
                            </li>
                        </ul>
                    </section>
                    <section className={`col-6 col-sm-6 col-md-4 col-xl mb-3 mb-md-0 col`}>
                        <ul>
                            <h5>
                                explore
                            </h5>
                            <li>
                                <Link to={"/"}>blog </Link>
                            </li>
                            <li>
                                <Link to={"/"}>home workouts </Link>
                            </li>
                            <li>
                                <Link to={"/"}>reebok love </Link>
                            </li>
                            <li>
                                <Link to={"/"}>build uor kid's success </Link>
                            </li>
                        </ul>
                    </section>
                    <section className={`col-6 col-sm-6 col-md-4 col-xl mb-3 mb-md-0 col`}>
                        <ul>
                            <h5>
                                company info
                            </h5>
                            <li>
                                <Link to={"/"}>about us </Link>
                            </li>
                            <li>
                                <Link to={"/"}>careers </Link>
                            </li>
                            <li>
                                <Link to={"/"}>privacy policy </Link>
                            </li>
                            <li>
                                <Link to={"/"}>news </Link>
                            </li>
                            <li>
                                <Link to={"/"}>terms & conditios </Link>
                            </li>
                        </ul>
                    </section>
                    <section className={`col-6 col-sm-6 col-md-4 col-xl mb-3 mb-md-0 col`}>
                        <ul>
                            <h5>
                                trending
                            </h5>
                            <li>
                                <Link to={"/"}>high tops </Link>
                            </li>
                            <li>
                                <Link to={"/"}>hikings </Link>
                            </li>
                            <li>
                                <Link to={"/"}>black shoes </Link>
                            </li>
                            <li>
                                <Link to={"/"}>nursing shoes </Link>
                            </li>
                            <li>
                                <Link to={"/"}>men's track pants </Link>
                            </li>
                            <li>
                                <Link to={"/"}>white shoes </Link>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </footer>
    )
}

export default Footer