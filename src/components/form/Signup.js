import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

//components
import Home from "../Home/Home"
import Nav from "../Nav/Nav"

//context
import { userDataContext } from '../../Context/SignupProvider'

//styles
import styles from "./signup.module.css"

//toatify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//title
import { Title } from '../../Hooks/Title'

const Signup = () => {
    //contatx
    const { state, dispatch } = useContext(userDataContext)

    const navigate = useNavigate()

    useEffect(() => {
        console.log(state.isLogin);
    }, [state])

    Title("Signup")

    return (
        <>
            <Nav />
            <article className="px-3 px-md-0" style={{ marginTop: "8rem" }}>
                {!state.isLogin ?
                    <>
                        <form className="container my-5" onSubmit={(event) => {
                            event.preventDefault()
                            dispatch({ type: "SUBMIT" })
                        }}>
                            <div className={styles.titleBox}>
                                <h2 className="text-dark bg-light fs-4 fw-bold">sign <span className="bg-dark text-light">up</span></h2>
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="username" className={styles.label}>Username</label>
                                <input type="text" className="form-control rounded-0" id="username" name="userName"
                                    value={state.dataSented.userName} onChange={(event) => dispatch({ type: "SET-VALUE", eventName: event.target.name, eventValue: event.target.value })}
                                    onKeyUp={(event) => dispatch({ type: "CHECK-INPUT", eventName: event.target.name })}
                                />
                                <div>
                                    {(state.errorMessage.userName && state.isFocus.userName) && <span className=" alert alert-dark p-1" > {state.errorMessage.userName} </span>}
                                </div>
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="exampleInputEmail1" className={styles.label}>Email address</label>
                                <input type="email" className="form-control rounded-0" id="exampleInputEmail1" name="email"
                                    value={state.dataSented.email} onChange={(event) => dispatch({ type: "SET-VALUE", eventName: event.target.name, eventValue: event.target.value })}
                                    onKeyUp={(event) => dispatch({ type: "CHECK-INPUT", eventName: event.target.name })}
                                />
                                <div>
                                    {(state.errorMessage.email && state.isFocus.email) && <span className=" alert alert-dark p-1" > {state.errorMessage.email} </span>}
                                </div>
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="exampleInputPassword1" className={styles.label}>Password</label>
                                <input type="password" className="form-control rounded-0" id="exampleInputPassword1" name="password"
                                    value={state.dataSented.password} onChange={(event) => dispatch({ type: "SET-VALUE", eventName: event.target.name, eventValue: event.target.value })}
                                    onKeyUp={(event) => dispatch({ type: "CHECK-INPUT", eventName: event.target.name })}
                                />
                                <div>
                                    {(state.errorMessage.password && state.isFocus.password) && <span className=" alert alert-dark p-1" > {state.errorMessage.password} </span>}
                                </div>
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="exampleInputPassword2" className={styles.label}>Confirm Password</label>
                                <input type="password" className="form-control rounded-0" id="exampleInputPassword2" name="confirmPassword"
                                    value={state.dataSented.confirmPassword} onChange={(event) => dispatch({ type: "SET-VALUE", eventName: event.target.name, eventValue: event.target.value })}
                                    onKeyUp={(event) => dispatch({ type: "CHECK-INPUT", eventName: event.target.name })}
                                />
                                <div>
                                    {(state.errorMessage.confirmPassword && state.isFocus.confirmPassword) && <span className=" alert alert-dark p-1" > {state.errorMessage.confirmPassword} </span>}
                                </div>
                            </div>
                            <div className="mb-3 form-check" style={{ height: "50px" }}>
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" name='isAccepted'
                                    value={state.dataSented.isAccepted} onChange={(event) => dispatch({ type: "SET-VALUE-CHECKBOX", eventName: event.target.name, eventChecked: event.target.checked })}
                                    onInput={(event) => dispatch({ type: "CHECK-INPUT", eventName: event.target.name })}
                                />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                <div className="text-center" style={{ fontSize: "13px" }}>
                                    {(state.errorMessage.isAccepted && state.isFocus.isAccepted) && <span className=" m-0 alert alert-dark p-1" > {state.errorMessage.isAccepted} </span>}
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <button type="submit" className="text-uppercase btn btn-dark w-75">Submit</button>
                            </div>
                        </form>
                        <ToastContainer />
                    </> : navigate("/")}

            </article>
        </>
    )
}

export default Signup