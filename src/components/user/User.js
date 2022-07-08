import React, { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

//context
import { userDataContext } from "../../Context/SignupProvider";
import { CartContext } from "../../Context/CartContextProvider";

//components
import Nav from "../Nav/Nav";
import FavoriteList from "./FavoriteList";
import SideList from "./SideList";

//css
import styles from "./user.module.css";

//title
import { Title } from "../../Hooks/Title";

//reducer
const initialValue = {
    orders: true,
    favorites: false,
    saved: false,
};

const Reducer = (state, action) => {
    switch (action.type) {
        case "orders":
            return {
                ...state,
                orders: true,
                favorites: false,
                saved: false,
            };

        case "favorites":
            return {
                ...state,
                orders: false,
                favorites: true,
                saved: false,
            };

        case "saved":
            return {
                ...state,
                orders: false,
                favorites: false,
                saved: true,
            };
    }
};

const User = () => {
    //context
    const { state, dispatch } = useContext(userDataContext);
    const { cartState, cartDispatch } = useContext(CartContext);

    //show-which-menu?
    const [profileState, profileDispatch] = useReducer(Reducer, initialValue);

    Title("Profile");
    const navigate = useNavigate();

    return (
        <>
            {!state.isLogin && navigate("/Home")}
            <Nav />
            <div className={`container`}>
                <div className={`${styles.user_info_container} row`}>
                    <div
                        className={`col-xl-8 col-md-7 col-11 mx-auto ms-xl-3 ${styles.left_user_details}`}
                    >
                        {profileState.orders && (
                            <div
                                className={`d-flex align-items-center fw-bold fs-4 justify-content-center`}
                                style={{ height: "220px" }}
                            >
                                orders is empty!
                            </div>
                        )}

                        {profileState.favorites && (
                            <div className={`row ${styles.favorite_container}`}>
                                {cartState.favoriteList.length ? (
                                    cartState.favoriteList.map((item) => (
                                        <section
                                            key={item.id}
                                            className={`col-md-9 col-xl-6 col-lg-8 col-11 col-sm-10 mx-auto m-0 px-0 ${styles.favorite_box}`}
                                        >
                                            {
                                                <FavoriteList
                                                    key={item.id}
                                                    id={item.id}
                                                    item={item}
                                                    image={item.image}
                                                    price={item.price}
                                                    title={item.title}
                                                />
                                            }
                                        </section>
                                    ))
                                ) : (
                                    <div
                                        className={`d-flex align-items-center fw-bold fs-4 justify-content-center`}
                                        style={{ height: "220px" }}
                                    >
                                        favorite list is empty!
                                    </div>
                                )}
                            </div>
                        )}

                        {profileState.saved && (
                            <div
                                className={`d-flex align-items-center fw-bold fs-4 justify-content-center`}
                                style={{ height: "220px" }}
                            >
                                saved is empty!
                            </div>
                        )}
                    </div>
                    <SideList
                        showOrders={() => {
                            profileDispatch({ type: "orders" });
                        }}
                        oActive={profileState.orders ? styles.active : ""}
                        sActive={profileState.saved ? styles.active : ""}
                        fActive={profileState.favorites ? styles.active : ""}
                        showSaved={() => profileDispatch({ type: "saved" })}
                        showFavorites={() => profileDispatch({ type: "favorites" })}
                    />
                </div>
            </div>
        </>
    );
};

export default User;
