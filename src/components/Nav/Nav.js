import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

//conterxt
import { CartContext } from "../../Context/CartContextProvider";
import { userDataContext } from "../../Context/SignupProvider";

import { Nav, Navbar, Offcanvas, OffcanvasBody } from "react-bootstrap";

const NavComponent = () => {
    const cartData = useContext(CartContext);
    const { state, dispatch } = useContext(userDataContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar bg="dark" expand="md" variant="dark">
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse
                className="d-md-flex d-none justify-content-md-between"
                id="basic-navbar-nav"
            >
                <Nav className={styles.leftMenu}>
                    <ul className="flex-column flex-md-row">
                        <li>
                            <Link
                                className={
                                    window.location.pathname == "/Home"
                                        ? styles.nav_link_active
                                        : "text-light"
                                }
                                to={"/Home"}
                            >
                                HOME{" "}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    window.location.pathname == "/Products"
                                        ? styles.nav_link_active
                                        : "text-light"
                                }
                                to={"/Products"}
                            >
                                Products{" "}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    window.location.pathname == "/Contact-us"
                                        ? styles.nav_link_active
                                        : "text-light"
                                }
                                to={"/"}
                            >
                                contact us{" "}
                            </Link>
                        </li>
                    </ul>
                </Nav>
                <Nav className={styles.rightMenu}>
                    <ul className="p-0 m-0">
                        <li>
                            {state.isLogin ? (
                                <Link
                                    className={
                                        window.location.pathname == "/User-info"
                                            ? styles.nav_icon_link_active
                                            : "text-light"
                                    }
                                    to={"/User-info"}
                                >
                                    <i className="bi bi-person-circle fs-2"></i>
                                </Link>
                            ) : (
                                <Link
                                    className={
                                        window.location.pathname == "/Signup"
                                            ? styles.nav_icon_link_active
                                            : "text-light"
                                    }
                                    to={"/Signup"}
                                >
                                    <i className="bi bi-box-arrow-in-right fs-2"></i>
                                </Link>
                            )}
                        </li>
                        <li>
                            <Link
                                className={
                                    window.location.pathname == "/Cart"
                                        ? styles.nav_icon_link_active
                                        : "text-light"
                                }
                                to={"/Cart"}
                            >
                                <i className="bi bi-cart3 fs-2"></i>
                                <span className="bg-light text-dark">
                                    {cartData.cartState.allQuantity}{" "}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </Nav>
            </Navbar.Collapse>

            {/* {sm size} */}
            <div className={`d-md-none ${styles.sm_nav}`}>
                <button
                    className="navbar-toggler"
                    variant="primary"
                    onClick={handleShow}
                    type="button"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`d-flex`}>
                    <li>
                        {state.isLogin ? (
                            <Link
                                className={
                                    window.location.pathname == "/User-info"
                                        ? styles.nav_icon_link_active
                                        : "text-light"
                                }
                                to={"/User-info"}
                            >
                                <i className="bi bi-person-circle fs-2"></i>
                            </Link>
                        ) : (
                            <Link
                                className={
                                    window.location.pathname == "/Signup"
                                        ? styles.nav_icon_link_active
                                        : "text-light"
                                }
                                to={"/Signup"}
                            >
                                <i className="bi bi-box-arrow-in-right fs-2"></i>
                            </Link>
                        )}
                    </li>
                    <li>
                        <Link
                            className={
                                window.location.pathname == "/Cart"
                                    ? styles.nav_icon_link_active
                                    : "text-light"
                            }
                            to={"/Cart"}
                        >
                            <i className="bi bi-cart3 fs-2"></i>
                            <span className="bg-light text-dark">
                                {cartData.cartState.allQuantity}{" "}
                            </span>
                        </Link>
                    </li>
                </div>
            </div>
            <Offcanvas
                show={show}
                onHide={handleClose}
                className={`d-md-none ${styles.menu_nav} bg-dark`}
            >
                <Offcanvas.Header closeButton closeVariant="white" className="mb-2">
                    <Offcanvas.Title className="text-light">online shop</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="flex-column flex-md-row p-0">
                        <li>
                            <Link
                                className={
                                    window.location.pathname == "/Home"
                                        ? styles.nav_link_active
                                        : "text-light"
                                }
                                to={"/Home"}
                            >
                                HOME{" "}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    window.location.pathname == "/Products"
                                        ? styles.nav_link_active
                                        : "text-light"
                                }
                                to={"/Products"}
                            >
                                Products{" "}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    window.location.pathname == "/Contact-us"
                                        ? styles.nav_link_active
                                        : "text-light"
                                }
                                to={"/"}
                            >
                                contact us{" "}
                            </Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </Navbar>
    );
};

export default NavComponent;
