import React, { useContext, useEffect, useRef } from 'react'

import styles from "./ProductDetailsComponent.module.css"

//context
import { CartContext } from '../../Context/CartContextProvider';

//function
import { isInCart } from '../../functions/functions';
import { productQuantity } from '../../functions/functions';

//magnify
import ReactImageMagnify from "react-image-magnify"

const ProductDetailsComponent = (props) => {
    const { cartState, cartDispatch } = useContext(CartContext)
    const { img, title, description, price, category, id, item } = props;

    return (
        <section className={`${styles.productContainer}`}>
            <div className="d-flex flex-column align-items-center align-items-lg-start flex-md-row justify-content-between w-100" style={{ height: "80%" }}>
                <div className={styles.leftProductSection}>
                    <div className={`d-flex w-100 d-lg-none ${styles.imgBox}`}>
                        <img src={img} alt="product" />
                    </div>
                    <ReactImageMagnify className={`d-none d-lg-block ${styles.imgBox}`} {...{
                        smallImage: {
                            alt: 'product',
                            isFluidWidth: true,
                            src: img,
                            // sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                        },
                        largeImage: {
                            src: img,
                            width: 650,
                            height: 750,
                        },
                        enlargedImageContainerDimensions: {
                            width: 520,
                            height: '120%'
                        }
                    }} />

                    <div className={styles.categoryBox}>
                        <span className="me-3 text-secondary opacity-75 fw-bold">
                            category:
                        </span>
                        <span className="text-info">
                            {category}
                        </span>
                    </div>
                </div>
                <div className={styles.rightProductSection}>
                    <div className={styles.textBox}>
                        <div className="mb-4">
                            <h3 className="text-center">{title}</h3>
                        </div>
                        <div>
                            <p>
                                {description}
                            </p>
                        </div>
                        <div className="mt-2 d-flex align-items-center">
                            <span className="fs-5 me-1">
                                {props.rate}
                            </span>
                            <span className="fs-5">
                                <i className="bi bi-star-fill text-warning"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.btnBox}>
                <div className={styles.btnDiv}>
                    <div className="mt-4 m-md-0 h-100">
                        {
                            isInCart(cartState, id) == false && <button style={{ fontSize: "18px", letterSpacing: "2px", fontWeight: '600' }} className="w-100 bg-primary h-100" onClick={() => cartDispatch({ type: "ADD-ITEM", payload: item })}>add to cart</button>}
                        {isInCart(cartState, id) && <button className="bg-primary me-3 fw-bold fs-5" onClick={() => cartDispatch({ type: "INCREASE", payload: item })}> + </button>}
                        {productQuantity(cartState, id) && <span className="me-3 fs-4 fw-bold">{productQuantity(cartState, id)} </span>}
                        {productQuantity(cartState, id) == 1 && <button className="bg-primary me-3 fw-bold fs-5" onClick={() => cartDispatch({ type: "REMOVE-ITEM", payload: item })}> <i className="bi bi-trash"></i></button>}
                        {productQuantity(cartState, id) > 1 && <button className="bg-primary me-3 fw-bold fs-5" onClick={() => cartDispatch({ type: "DECREASE", payload: item })}> -  </button>}
                    </div>
                </div>
                <div className="mt-3" >
                    <div className={styles.priceBox}>
                        <span className="fw-bold fs-4 opacity-75">
                            {productQuantity(cartState, id) ? productQuantity(cartState, id) * price : price}
                        </span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProductDetailsComponent