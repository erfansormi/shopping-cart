const isInCart = (state, id) => {
    const cart = !!state.selectedItems.find(item => item.id == id)
    return cart
}


const isValidSignup = (errorMessage, data) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if (!data.userName) {
        errorMessage.userName = "user name is required!"
    }
    else if (data.userName.length < 5) {
        errorMessage.userName = "user name must more than 5 character"
    } else {
        delete errorMessage.userName
    }

    if (!data.email) {
        errorMessage.email = "email is required!"
    }
    else if (!emailRegex.test(String(data.email))) {
        errorMessage.email = "email invalid!"
    }
    else {
        delete errorMessage.email
    }

    if (!data.password) {
        errorMessage.password = "password is required!"
    }
    else if (data.password.length <= 7) {
        errorMessage.password = "password must more than 7 character"
    } else {
        delete errorMessage.password
    }

    if (data.confirmPassword == false) {
        errorMessage.confirmPassword = "confirmPassword is required!"
    }
    else if (data.confirmPassword != data.password) {
        errorMessage.confirmPassword = "password and confirmPassword not match!"
    } else {
        delete errorMessage.confirmPassword
    }

    if (!data.isAccepted) {
        errorMessage.isAccepted = "you must accept our privacy & policy!"
    }
    else {
        delete errorMessage.isAccepted
    }

    return errorMessage
}

const productQuantity = (state, id) => {
    const index = state.selectedItems.findIndex((item) => item.id == id)
    if (state.selectedItems[index]) {
        return state.selectedItems[index].quantity
    } else {
        return false
    }
}

const sliderFilter = (product) => {
    const productFiltered = product.filter((item) => item.id <= 8 && item)
    return productFiltered
}

const categoryFilter = (data, type) => {
    const filter = data.filter(item => item.category == type)
    return filter
}

export { productQuantity, isValidSignup, isInCart, sliderFilter, categoryFilter }