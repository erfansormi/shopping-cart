import React, { useContext } from "react";
import { Link } from "react-router-dom";

//context
import { CartContext } from "../../Context/CartContextProvider";

//functions
import { isInFavorite } from "../../functions/functions";

//components
import DetailsBtn from "../Buttons/DetailsBtn";

//css
import styles from "./favoriteList.module.css";

const FavoriteList = (props) => {
    const { cartState, cartDispatch } = useContext(CartContext);
    const { id, item, price, image, title } = props;

    return (
        <>
            <section className={styles.favoriteList}>
                <div className={styles.imgBox}>
                    <img src={image} />
                </div>
                <div className={`${styles.info_product}`}>
                    <h5>{title}</h5>
                    <span className="mb-3 fw-bold">$ {price}</span>
                    <div className={styles.detailsBox}>
                        {isInFavorite(cartState, id) && (
                            <button
                                className={`btn btn-outline-danger`}
                                onClick={() =>
                                    cartDispatch({ type: "REMOVE-TO-FAVORITE", payload: item })
                                }
                            >
                                remove from list
                            </button>
                        )}

                        {/* this btn go to details */}
                        <DetailsBtn id={id} outLine={true} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default FavoriteList;
