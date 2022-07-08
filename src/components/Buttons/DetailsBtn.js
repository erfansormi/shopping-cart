import React from "react";
import { Link } from "react-router-dom";

//css
import styles from "./detailsBtn.module.css"

const DetailsBtn = ({ id, outLine }) => {
    return (
        <div className={styles.detail_btn_container}>
            <Link
                to={`/Products/Product${id}`}
                className={`btn ${outLine ? "btn-outline-info" : "btn-info"} fw-bold`}
            >
                details
            </Link>
        </div>
    );
};

export default DetailsBtn;
