import React from 'react'

//style
import styles from "./BannerComponent.module.css"

const BannerComponent = (props) => {


    return (
        <>
            <div className={styles.imgBox}>
                {props.type == "img" && < img src={props.img} alt="banner" />}
                {props.type == "video" && <video style={{ objectFit: "cover" }} loop autoPlay src={props.video} ></video>}
            </div>
            <div className={styles.detailsBox}>
                <div>
                    <h3>
                        {props.title}
                    </h3>
                </div>
                <div>
                    <p>
                       {props.description}
                    </p>
                </div>
                <div>
                    <button className='btn btn-light'>
                        shop now
                    </button>
                </div>
            </div>
        </>
    )
}

export default BannerComponent