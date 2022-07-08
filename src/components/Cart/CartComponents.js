import React, { useContext } from 'react'

//style
import styles from "./CartComponents.module.css"
import { Button } from "react-bootstrap"

//contetx
import { CartContext } from '../../Context/CartContextProvider'

//functions
import { isInCart } from "../../functions/functions"
import { productQuantity } from '../../functions/functions'

const CartComponents = (props) => {
    const { image, title, description, price, id, category, quantity, item } = props
    const { cartState, cartDispatch } = useContext(CartContext)

    return (
        <section className={styles.CartContainer}>
            <div className="container">
                <div className={"row align-items-center"} >
                    <div className={"col-5 col-md-2 d-flex align-items-center justify-content-between m-md-0 m-auto mb-3"}>
                        <img className="img-fluid" src={image} />
                    </div>
                    <div className={"col-md-7"}>
                        <div className={styles.titleBox}>
                            <h4 className="text-center">
                                {title}
                            </h4>
                        </div>
                        <div className={styles.descriptionBox}>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className={"col-md-3 mt-3 m-md-0"}>
                        <div className={styles.buyInfo} >
                            <div className="w-100 mt-3 d-flex align-items-center flex-column">
                                <div className="d-flex align-items-center justify-content-center ">
                                    <span className="me-2 fw-bold opacity-75">price:</span>
                                    <span className="fw-bold" >$ {productQuantity(cartState, id) ? Number(productQuantity(cartState, id) * price).toFixed(2) : price}</span>
                                </div>

                            </div>
                            <div className={styles.btnBox}>
                                {isInCart(cartState, id) ? <button className="bg-primary fw-bold fs-5" onClick={() => cartDispatch({ type: "INCREASE", payload: item })}> + </button>
                                    : <button className="w-100 bg-primary fw-bold" onClick={() => cartDispatch({ type: "ADD-ITEM", payload: item })}>add to cart</button>}
                                {productQuantity(cartState, id) && <span className="fw-bold">{productQuantity(cartState, id)} </span>}
                                {productQuantity(cartState, id) == 1 && <button styles={{ width: "50px" }} className="bg-primary fw-bold fs-5" onClick={() => cartDispatch({ type: "REMOVE-ITEM", payload: item })}> <i className="bi bi-trash"></i></button>}
                                {productQuantity(cartState, id) > 1 && <button styles={{ width: "50px" }} className="bg-primary fw-bold fs-5" onClick={() => cartDispatch({ type: "DECREASE", payload: item })}> -  </button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartComponents