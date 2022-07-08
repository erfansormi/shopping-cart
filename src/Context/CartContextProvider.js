import React, { createContext, useReducer } from 'react'

const sumQuantity = (state) => {
    const resultSum = state.reduce((item, number) => item + number.quantity, 0)
    return resultSum
}

const totalPrice = (state) => {
    const result = state.reduce((item, number) => item + number.quantity * number.price, 0)
    return result.toFixed(2)
}

const initialState = {
    selectedItems: [],
    total: 0,
    allQuantity: 0,
    checkout: false,
    favoriteList: []
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD-ITEM":
            if (!state.selectedItems.find(item => item.id == action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                // selectedItems: [...state.selectedItems],
                checkout: false,
                allQuantity: sumQuantity(state.selectedItems),
                total: totalPrice(state.selectedItems)
            }

        case "REMOVE-ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id != action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                allQuantity: sumQuantity(newSelectedItems),
                total: totalPrice(newSelectedItems)
            }

        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id == action.payload.id)
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                total: totalPrice(state.selectedItems),
                allQuantity: sumQuantity(state.selectedItems),
            }

        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id == action.payload.id)
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                total: totalPrice(state.selectedItems),
                allQuantity: sumQuantity(state.selectedItems),
            }

        case "CHECKOUT":
            return {
                ...state,
                selectedItems: [],
                total: 0,
                allQuantity: 0,
                checkout: true,
            }

        case "CLEAR":
            return {
                ...state,
                selectedItems: [],
                total: 0,
                allQuantity: 0,
                checkout: false,
            }

        case "ADD-TO-FAVORITE":
            if (!state.favoriteList.find((item) => item.id == action.payload.id)) {
                state.favoriteList.push(action.payload)
            }
            return {
                ...state
            }

        case "REMOVE-TO-FAVORITE":
            const newFavoriteList = state.favoriteList.filter(item => item.id != action.payload.id)
            return {
                ...state,
                favoriteList: [...newFavoriteList]
            }

    }
}

export const CartContext = createContext()

const CartContextProvider = (props) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    return (
        <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider