import React from 'react'

import styles from "./EmptyCart.module.css"

//svg
import empty from "../../assets/img/empty-cart.svg"
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <>
            <section className={styles.emptyBox}>
                <div>
                    <h5 className="text-secondary">there is nothing</h5>
                </div>
                <div>
                    <img src={empty} alt="empty-cart" />
                </div>
                <div className="mt-4 d-flex">
                    <h6 className="me-2">
                        want see products?
                    </h6>
                    <span>
                        <Link className='text-decoration-none' to={"/Products"}>click here!</Link>
                    </span>
                </div>
            </section>
        </>
    )
}

export default EmptyCart