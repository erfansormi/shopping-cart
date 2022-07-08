import React, { useContext } from 'react'

import { Link } from 'react-router-dom';

//style
import styles from "../products/AllProductsComponents.module.css"

//function
import { isInCart } from '../../functions/functions';
import { productQuantity } from '../../functions/functions';

//context
import { CartContext } from '../../Context/CartContextProvider';

const SliderCard = (props) => {

    const { img, title, price, id, item } = props;
    const { cartState, cartDispatch } = useContext(CartContext)

    return (
        <>
            <section className={styles.ProductContainer} style={{ width: "100%", boxShadow: "0 0 8px 1px rgb(0 0 0 / 80%)", margin: "0" }} >
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
                        <Link to={`/Products/Product${id}`} className=" btn-info fw-bold" style={{ color: "#333" }}>
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
            </section >
        </>
    )
}

export default SliderCard