import React, { useContext } from "react";

//style
import styles from "./CartComponents.module.css";

//contetx
import { CartContext } from "../../Context/CartContextProvider";

//functions
import { productQuantity } from "../../functions/functions";

//components
import CartBtns from "../Buttons/CartBtns";

const CartComponents = (props) => {
    const { image, title, description, price, id, category, quantity, item } =
        props;
    const { cartState } = useContext(CartContext);

    return (
        <section className={styles.CartContainer}>
            <div className="container">
                <div className={"row align-items-center"}>
                    <div
                        className={
                            "col-5 col-md-2 d-flex align-items-center justify-content-between m-md-0 m-auto mb-3"
                        }
                    >
                        <img className="img-fluid" src={image} />
                    </div>
                    <div className={"col-md-7"}>
                        <div className={styles.titleBox}>
                            <h4 className="text-center">{title}</h4>
                        </div>
                        <div className={styles.descriptionBox}>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className={"col-md-3 mt-3 m-md-0"}>
                        <div className={styles.buyInfo}>
                            <div className="w-100 mt-3 d-flex align-items-center flex-column">
                                <div className="d-flex align-items-center justify-content-center ">
                                    <span className="me-2 fw-bold opacity-75">price:</span>
                                    <span className="fw-bold">
                                        ${" "}
                                        {productQuantity(cartState, id)
                                            ? Number(productQuantity(cartState, id) * price).toFixed(
                                                2
                                            )
                                            : price}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.btnBox}>
                                {/*cart-btns (add to cart , remove to cart and ...)  */}
                                <CartBtns id={id} item={item} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartComponents;
