import React, { useContext } from 'react'

import { Link } from 'react-router-dom';

//style
import styles from "../products/AllProductsComponents.module.css"

//components
import CartBtns from '../Buttons/CartBtns';
import ProductPrice from '../Digits/ProductPrice';
import DetailsBtn from '../Buttons/DetailsBtn';

const SliderCard = (props) => {

    const { img, title, price, id, item } = props;

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

                {/* calculate product price */}
                <ProductPrice id={id} price={price} />

                <div className={styles.btnBox}>
                    {/* this btn go to details */}
                    <DetailsBtn id={id} />


                    {/*cart-btns (add to cart , remove to cart and ...)  */}
                    <CartBtns id={id} item={item} />

                </div>
            </section >
        </>
    )
}

export default SliderCard