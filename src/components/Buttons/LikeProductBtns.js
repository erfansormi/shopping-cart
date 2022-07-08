import React, { useContext } from "react";

//context
import { CartContext } from '../../Context/CartContextProvider';

//imported functions
import { isInFavorite } from "../../functions/functions";

//css
import styles from "./likeProductBtns.module.css"

const LikeProductBtns = ({ id, item }) => {
    const { cartState, cartDispatch } = useContext(CartContext)

    return (
        <>
            {isInFavorite(cartState, id) ? (
                <button
                    className={styles.favoriteBox}
                    onClick={() =>
                        cartDispatch({ type: "REMOVE-TO-FAVORITE", payload: item })
                    }
                >
                    <i className="bi bi-heart-fill"></i>
                </button>
            ) : (
                <button
                    className={styles.favoriteBox}
                    onClick={() =>
                        cartDispatch({ type: "ADD-TO-FAVORITE", payload: item })
                    }
                >
                    <i className="bi bi-heart"></i>
                </button>
            )}
        </>
    );
};

export default LikeProductBtns;
