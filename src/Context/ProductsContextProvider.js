import React, { createContext, useEffect, useState } from 'react'

//API
import GetAPI from '../API/GetAPI'

//components
import Error500 from '../components/Error/Error500'

export const Products = createContext()

const ProductsContext = (props) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const getapi = async () => {
            const api = await GetAPI()
            api.status == 200 || 201 ? setProducts(api.data) && setError(false) : setError(true)
        }
        getapi()
    }, [])

    return (
        <Products.Provider value={products}>
            {error ? <Error500 /> : props.children}
        </Products.Provider>
    )
}

export default ProductsContext