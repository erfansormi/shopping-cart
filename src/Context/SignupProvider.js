import React, { createContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

//firebase
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase/Firebase'

//notify
import { notify } from '../components/toastify/toastify'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//imported func
import { isValidSignup } from '../functions/functions'

//context
export const userDataContext = createContext()

const initialState = {
    // isLogin: auth.currentUser != null ? true : false,
    isLogin: window.localStorage.getItem("user-data") ? true : false,

    dataSented: {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false,
    },

    errorMessage: {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false,
    },

    isFocus: {
        userName: false,
        email: false,
        password: false,
        confirmPassword: false,
        isAccepted: false,
    },

    localStorage: {},
}

//functions
const changeHandler = (eventName, eventValue, state) => {
    return {
        ...state,
        ...state.dataSented[eventName] = eventValue.trim()
    }
}

const checkboxHandler = (eventName, eventChecked, state) => {
    return {
        ...state,
        ...state.dataSented[eventName] = eventChecked,
    }
}

const localStorage = (initialValue, state) => {
    const useLocalStorage = window.localStorage.getItem("user-data")

    if (useLocalStorage) {
        state.localStorage = JSON.parse(useLocalStorage)
    } else {
        state.localStorage = initialValue
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET-VALUE":
            changeHandler(action.eventName, action.eventValue, state)
            return {
                ...state
            }

        case "SET-VALUE-CHECKBOX":
            checkboxHandler(action.eventName, action.eventChecked, state)
            return {
                ...state
            }

        case "CHECK-INPUT":
            isValidSignup(state.errorMessage, state.dataSented)
            state.isFocus[action.eventName] = true

            return {
                ...state,
            }

        case "SUBMIT":
            isValidSignup(state.errorMessage, state.dataSented)
            state.isFocus = {
                userName: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            }

            const error = Object.keys(state.errorMessage)
            if (!error.length) {
                notify("login successfully!", "success")
                state.isLogin = true
                
                localStorage("", state)
                window.localStorage.setItem("user-data", JSON.stringify(state.dataSented))

                // createUserWithEmailAndPassword(auth, state.dataSented.email, state.dataSented.password)
                //     .then((userCredential) => {
                //         // Signed in 
                //         const user = userCredential.user;
                //         user.displayName = state.dataSented.userName;
                //         state.isLogin = true
                //         useNavigate("/Home")
                //         // ...
                //     })
                //     .catch((error) => {
                //         const errorCode = error.code;
                //         const errorMessage = error.message;
                //         console.log("errorMessage : ", errorMessage);
                //         console.log("errorCode : ", errorCode);
                //         // ..
                //     });

            } else if (error.length) {
                notify("data sented invalid!", "error")
            }

            return {
                ...state,
            }

        case "signOut":
            window.localStorage.clear("user-data")
            state.isLogin = false
            notify("you logout! ", "error")
            //     const signOutHandler = async () => {
            //         await auth.signOut()
            //     }
            //     signOutHandler()

            return {
                ...state
            }

    }
}

const SignupContaxtProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // useEffect(() => {
    //     auth.onAuthStateChanged(user => {
    //         state.loading = false;

    //         if (user) {
    //             setUser(user);
    //             state.isLogin = true
    //             localStorage("", state)
    //             window.localStorage.setItem("user-data", JSON.stringify(user))
    //         }
    //         else if (!user) {
    //             setUser([]);
    //             state.isLogin = false

    //         }
    //     })

    // }, [user , navigate])

    return (
        <>
            <userDataContext.Provider value={{ state, dispatch }}>
                {props.children}
            </userDataContext.Provider>
            <ToastContainer />
        </>
    )
}

export default SignupContaxtProvider