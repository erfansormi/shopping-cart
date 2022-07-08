import React, { useContext, useEffect, useRef } from "react";

import styles from "./ProductDetailsComponent.module.css";

//context
import { CartContext } from "../../Context/CartContextProvider";

//components
import CartBtns from "../Buttons/CartBtns";
import ProductPrice from "../Digits/ProductPrice";

//magnify
import ReactImageMagnify from "react-image-magnify";

const ProductDetailsComponent = (props) => {
    const { cartState, cartDispatch } = useContext(CartContext);
    const { img, title, description, price, category, id, item } = props;

    return (
        <section className={`${styles.productContainer}`}>
            <div
                className="d-flex flex-column align-items-center align-items-lg-start flex-md-row justify-content-between w-100"
                style={{ height: "80%" }}
            >
                <div className={styles.leftProductSection}>
                    <div className={`d-flex w-100 d-lg-none ${styles.imgBox}`}>
                        <img src={img} alt="product" />
                    </div>
                    <ReactImageMagnify
                        className={`d-none d-lg-block ${styles.imgBox}`}
                        {...{
                            smallImage: {
                                alt: "product",
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
                                height: "120%",
                            },
                        }}
                    />

                    <div className={styles.categoryBox}>
                        <span className="me-3 text-secondary opacity-75 fw-bold">
                            category:
                        </span>
                        <span className="text-info">{category}</span>
                    </div>
                </div>
                <div className={styles.rightProductSection}>
                    <div className={styles.textBox}>
                        <div className="mb-4">
                            <h3 className="text-center">{title}</h3>
                        </div>
                        <div>
                            <p>{description}</p>
                        </div>
                        <div className="mt-2 d-flex align-items-center">
                            <span className="fs-5 me-1">{props.rate}</span>
                            <span className="fs-5">
                                <i className="bi bi-star-fill text-warning"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.btnBox}>
                <div className={styles.btnDiv}>
                    {/*cart-btns (add to cart , remove to cart and ...)  */}
                    <CartBtns id={id} item={item} type={"details"} />
                </div>
                <div className="mt-3">
                    <div className={styles.priceBox}>
                        {/* calculate product price */}
                        <ProductPrice id={id} price={price} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsComponent;
