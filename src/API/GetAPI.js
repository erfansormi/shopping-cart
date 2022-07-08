import axios from "axios"

const GetAPI = async () => {
    const mainURL = "https://fakestoreapi.com"

    const products = await axios.get(`${mainURL}/products`)
    return products
}

export default GetAPI;