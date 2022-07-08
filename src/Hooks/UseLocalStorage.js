import { useEffect } from "react";

const UseLocalStorage = (key, initialValue, state) => {
    const localStorage = window.localStorage.getItem(key)
    if (localStorage) {
        state.localStorage = JSON.parse(localStorage)
    } else if (!localStorage) {
        state.localStorage = initialValue
    }

    // useEffect(() => {
    //     return window.localStorage.setItem(key, JSON.stringify(state.dataSented))
    // }, [state.dataSented])
}

export { UseLocalStorage }