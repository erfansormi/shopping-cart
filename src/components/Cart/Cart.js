import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

//context
import { CartContext } from "../../Context/CartContextProvider";

//components
import CartComponents from "./CartComponents";
import EmptyCart from "./EmptyCart";
import { CartInfo } from "./CartInfo";
import Nav from "../Nav/Nav";

//style
import styles from "./Cart.module.css";

//title
import { Title } from "../../Hooks/Title";

const Cart = () => {
    const { cartState, cartDispatch } = useContext(CartContext);
    const cartProducts = cartState.selectedItems;

    Title("Cart");

    return (
        <>
            <Nav />
            <main
                className="d-flex flex-md-row flex-column-reverse px-3 px-md-4 px-lg-5"
                style={{ justifyContent: "space-between", marginTop: "7.5rem" }}
            >
                <article style={{ width: "62%" }}>
                    {cartState.allQuantity ? (
                        cartProducts.map((item) => (
                            <CartComponents
                                item={item}
                                quantity={item.quantity}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                category={item.category}
                                key={item.id}
                                id={item.id}
                            />
                        ))
                    ) : (
                        <EmptyCart />
                    )}
                </article>
                <aside
                    className={styles.aside}
                    style={{ width: "35%", display: "flex", flexDirection: "column" }}
                >
                    <CartInfo />
                </aside>
            </main>
        </>
    );
};

export default Cart;
