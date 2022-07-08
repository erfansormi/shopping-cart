import React, { useContext } from 'react'

//context
import { Products } from '../../Context/ProductsContextProvider'

//router
import { useParams } from 'react-router-dom'

//components
import ProductDetailsComponent from './ProductDetailsComponent'
import Nav from "../Nav/Nav"

//title
import { Title } from '../../Hooks/Title'

const ProductDetails = () => {
    const data = useContext(Products)
    const { id } = useParams()

    const productObject = data.find(item => item.id == id)
    const product = []
    product.push(productObject)

    Title("Details")

    return (
        <>
            <Nav />
            <article className='px-3 px-lg-0' style={{ marginTop: "7.5rem" }}>
                {product.map(item => <ProductDetailsComponent rate={item.rating.rate} item={item} key={item.id} img={item.image} title={item.title} price={item.price} description={item.description} category={item.category} id={item.id} />)}
            </article>
        </>
    )
}

export default ProductDetails