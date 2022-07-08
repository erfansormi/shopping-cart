import React, { useContext } from "react";

//context
import { CartContext } from "../../Context/CartContextProvider";

//imported functions
import { productQuantity } from "../../functions/functions";

//css
import styles from "./productPrice.module.css";

const ProductPrice = ({ id, price }) => {
    const { cartState } = useContext(CartContext);

    return (
        <div>
            <span className={`fw-bold ${styles.price_box}`}>
                {productQuantity(cartState, id)
                    ? (productQuantity(cartState, id) * price).toFixed(2)
                    : price}
            </span>
        </div>
    );
};

export default ProductPrice;
