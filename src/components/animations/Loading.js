import React from 'react'

import styles from "./Loading.module.css"

const Loading = () => {
    return (
        <div className={styles.container}>
            <div className="spinner-grow mx-1" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow mx-1" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow mx-1" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading