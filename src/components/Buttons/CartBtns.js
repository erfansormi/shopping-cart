import React, { useContext } from "react";

//context
import { CartContext } from "../../Context/CartContextProvider";

//function
import { isInCart } from "../../functions/functions";
import { productQuantity } from "../../functions/functions";

//css
import styles from "./cartBtns.module.css";

const CartBtns = ({ id, item, type }) => {
    const { cartState, cartDispatch } = useContext(CartContext);

    return (
        <div
            className={`${styles.btnBox} ${type == "details" ? "justify-content-center" : "justify-content-around"
                }`}
        >

            {/* add or increase product count */}
            {isInCart(cartState, id) ? (
                <button
                    className="bg-primary fw-bold fs-5"
                    onClick={() => cartDispatch({ type: "INCREASE", payload: item })}
                >
                    {" "}
                    +{" "}
                </button>
            ) : (
                <button
                    className="w-100 bg-primary fw-bold"
                    onClick={() => cartDispatch({ type: "ADD-ITEM", payload: item })}
                >
                    add to cart
                </button>
            )}

            {/* product count */}
            {productQuantity(cartState, id) && (
                <span className={`fw-bold ${type == "details" && "mx-3 fs-5"}`}>
                    {productQuantity(cartState, id)}{" "}
                </span>
            )}

            {/* remove or decrease product count */}
            {productQuantity(cartState, id) == 1 && (
                <button
                    className="bg-primary fw-bold fs-5"
                    onClick={() => cartDispatch({ type: "REMOVE-ITEM", payload: item })}
                >
                    {" "}
                    <i className="bi bi-trash"></i>
                </button>
            )}
            {productQuantity(cartState, id) > 1 && (
                <button
                    className="bg-primary fw-bold fs-5"
                    onClick={() => cartDispatch({ type: "DECREASE", payload: item })}
                >
                    {" "}
                    -{" "}
                </button>
            )}
        </div>
    );
};

export default CartBtns;
