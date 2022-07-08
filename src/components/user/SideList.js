import React, { useContext, useState } from 'react'

//context
import { userDataContext } from '../../Context/SignupProvider'

//css
import styles from "./user.module.css"

//botstrap
import { Modal, Button } from 'react-bootstrap'

//icons
import userSVG from "../../assets/img/user.svg"

const SideList = (props) => {
    const { state, dispatch } = useContext(userDataContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const userData = JSON.parse(window.localStorage.getItem("user-data"))


    return (
        <aside className={`col-xl-3 col-md-5 col-11 mx-auto ${styles.sideList}`}>
            <div className={styles.user_info_box}>
                <img src={userSVG} alt={"user-icon"} />
                <div>
                    <h5>
                        username:
                    </h5>
                    <span>
                        {userData.userName}
                    </span>
                </div>
                <div>
                    <h5>
                        email:
                    </h5>
                    <span>
                        {userData.email}
                    </span>
                </div>
            </div>
            <ul>
                <div className={props.oActive} onClick={props.showOrders}>
                    <li>
                        <span>
                            orders
                        </span>
                        <i className="bi bi-basket3"></i>
                    </li>
                </div>
                <div className={props.fActive} onClick={props.showFavorites}>
                    <li>
                        <span>
                            favorites
                        </span>
                        <i className="bi bi-heart"></i>
                    </li>
                </div>
                <div className={props.sActive} onClick={props.showSaved}>
                    <li>
                        <span>
                            saved
                        </span>
                        <i className="bi bi-bookmarks"></i>
                    </li>
                </div>
                <div onClick={handleShow}>
                    <li>
                        <span>
                            exit
                        </span>
                        <i className="bi bi-box-arrow-left"></i>
                    </li>
                </div>
            </ul>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>if click yes , you logout than your account!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => dispatch({ type: "signOut" })}>
                        yes
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        no
                    </Button>
                </Modal.Footer>
            </Modal>
        </aside>
    )
}

export default SideList