import React, { useContext } from 'react'

import styles from "./cartInfo.module.css"

//context
import { CartContext } from '../../Context/CartContextProvider'

//img
import cartEmpty2 from "../../assets/img/139-basket-lineal.gif"

export const CartInfo = () => {
    const { cartState, cartDispatch } = useContext(CartContext)

    return (
        <>
            <div className={styles.cartBox}>
                <div className={styles.titleBox}>
                    <h4 className="text-uppercase fw-bold me-3">
                        your cart info
                    </h4>
                    <img src={cartEmpty2} alt="cart-empty" />
                </div>
                <div className={styles.infoBox} >
                    {cartState.allQuantity >= 1 ?
                        <div>
                            <div className="d-flex align-items-center ">
                                <h5 className="me-2 my-0 fs-5  opacity-75 text-lowercase">Total number of products:</h5>
                                <span className="fw-bold fs-5">{cartState.allQuantity}</span>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <h5 className="my-0 me-2 fs-5  opacity-75 text-lowercase">
                                    total price:
                                </h5>
                                <span className="fw-bold fs-5">
                                    $ {cartState.total}
                                </span>
                            </div>
                            <div className="mt-5 d-flex justify-content-between">
                                <button className="btn btn-success text-uppercase" onClick={() => cartDispatch({ type: "CHECKOUT" })} >
                                    checkout
                                </button>
                                <button className="btn btn-warning text-uppercase" onClick={() => cartDispatch({ type: "CLEAR" })} >
                                    clear all
                                </button>
                            </div>
                        </div>
                        :
                        <div>
                            <h4 className="opacity-50">cart is empty</h4>
                        </div>}
                </div>
            </div>
        </>
    )
}
