import React, { useContext } from "react";

//router
import { Link } from "react-router-dom";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

//context
import { Products } from "../../Context/ProductsContextProvider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../node_modules/swiper/swiper-bundle.css";
import styles from "./Slider.module.css";

//functions
import { sliderFilter } from "../../functions/functions";

//components
import SliderCard from "./SliderCard";
import Loading from "../animations/Loading";

//img
import offerImg from "../../assets/img/offer-img1.svg";
import chooseProduct from "../../assets/img/choose-product.png";

const Slider = () => {
    const products = useContext(Products);

    return (
        <>
            <article>
                <div className={styles.discountContainer}>
                    <Swiper
                        style={{
                            minHeight: "300px",
                            maxWidth: "1800px",
                            padding: "10px 0",
                        }}
                        slidesPerView={1}
                        spaceBetween={10}
                        slidesPerGroup={2}
                        navigation={true}
                        breakpoints={{
                            240: {
                                slidesPerView: 1.5,
                                spaceBetween: 30,
                            },
                            340: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            440: {
                                slidesPerView: 2.5,
                                spaceBetween: 10,
                            },
                            540: {
                                slidesPerView: 2.9,
                                spaceBetween: 0,
                            },
                            640: {
                                slidesPerView: 3.25,
                                spaceBetween: 0,
                            },
                            700: {
                                slidesPerView: 3.5,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 3.75,
                                spaceBetween: 15,
                            },
                            800: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                            868: {
                                slidesPerView: 4.25,
                                spaceBetween: 15,
                            },
                            968: {
                                slidesPerView: 4.5,
                                spaceBetween: 15,
                            },
                            1068: {
                                slidesPerView: 4.75,
                                spaceBetween: 15,
                            },
                            1204: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            1354: {
                                slidesPerView: 5.5,
                                spaceBetween: 20,
                            },
                            1504: {
                                slidesPerView: 6,
                                spaceBetween: 20,
                            },
                            1654: {
                                slidesPerView: 6.5,
                                spaceBetween: 20,
                            },
                            1804: {
                                slidesPerView: 7,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className={styles.offerBox}>
                            <div className={styles.imgBox}>
                                <img src={offerImg} alt="offer" />
                                <img src={chooseProduct} alt="choose-product" />
                            </div>
                            <div className={styles.btnBox}>
                                <Link to={"/Products"}>
                                    <button className="btn btn-warning text-uppercase fw-bold">
                                        see all
                                    </button>
                                </Link>
                            </div>
                        </SwiperSlide>
                        {sliderFilter(products).length ? (
                            sliderFilter(products).map((item) => (
                                <SwiperSlide key={item.id}>
                                    {" "}
                                    <SliderCard
                                        img={item.image}
                                        title={item.title}
                                        price={item.price}
                                        item={item}
                                        id={item.id}
                                    />{" "}
                                </SwiperSlide>
                            ))
                        ) : (
                            <SwiperSlide style={{ minWidth: "97vw" }}>
                                {" "}
                                <Loading />
                            </SwiperSlide>
                        )}
                        <SwiperSlide className={styles.seeAll_product_last_slide}>
                            <Link to="/Products" className="btn btn-light">
                                see all
                                <i className="bi bi-arrow-right-square-fill"></i>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </article>
        </>
    );
};

export default Slider;
