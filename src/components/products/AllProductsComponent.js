import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

//style
import styles from "./AllProductsComponents.module.css"

//function
import { isInCart } from '../../functions/functions';
import { productQuantity } from '../../functions/functions';

//context
import { CartContext } from '../../Context/CartContextProvider';

//functions
const favoriteHandler = (event) => {
    event.target.classList.toggle("bi-heart")
    event.target.classList.toggle("bi-heart-fill")
}

export const isInFavorite = (state, id) => {
    const search = state.favoriteList.find((item) => item.id == id)
    return !!search
}

const AllProductsComponent = (props) => {
    const { img, title, price, id, item, quantity } = props;
    const { cartState, cartDispatch } = useContext(CartContext)

    return (
        <section className={styles.ProductContainer} >
            <div className={styles.imgBox}>
                <Link to={`/Products/Product${id}`}>
                    <img src={img} alt="product" className="img-fluid" />
                </Link>
            </div>
            <div className={styles.titleBox}>
                <h5 className='h6'>{title}</h5>
            </div>
            <div>
                <span className="fw-bold">
                    $ {productQuantity(cartState, id) ? productQuantity(cartState, id) * price : price}
                </span>
            </div>
            <div className={styles.btnBox}>
                <div>
                    <Link to={`/Products/Product${id}`} className="btn btn-info fw-bold" style={{ color: "#333" }}>
                        details
                    </Link>
                </div>
                <div>
                    {isInCart(cartState, id) ? <button className="bg-primary fw-bold fs-5" onClick={() => cartDispatch({ type: "INCREASE", payload: item })}> + </button>
                        : <button className="w-100 bg-primary fw-bold" onClick={() => cartDispatch({ type: "ADD-ITEM", payload: item })}>add to cart</button>}
                    {productQuantity(cartState, id) && <span className="fw-bold">{productQuantity(cartState, id)} </span>}
                    {productQuantity(cartState, id) == 1 && <button styles={{ width: "50px" }} className="bg-primary fw-bold fs-5" onClick={() => cartDispatch({ type: "REMOVE-ITEM", payload: item })}> <i className="bi bi-trash"></i></button>}
                    {productQuantity(cartState, id) > 1 && <button styles={{ width: "50px" }} className="bg-primary fw-bold fs-5" onClick={() => cartDispatch({ type: "DECREASE", payload: item })}> -  </button>}
                </div>
            </div>
            {isInFavorite(cartState, id) ?
                <button className={styles.favoriteBox} onClick={() => cartDispatch({ type: "REMOVE-TO-FAVORITE", payload: item })}>
                    <i className="bi bi-heart-fill" ></i>
                </button>
                :
                <button className={styles.favoriteBox} onClick={() => cartDispatch({ type: "ADD-TO-FAVORITE", payload: item })}>
                    <i className="bi bi-heart" ></i>
                </button>
            }

        </section >
    )
}

export default AllProductsComponent