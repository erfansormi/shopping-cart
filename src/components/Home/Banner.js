import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "../../../node_modules/swiper/swiper-bundle.css";

// import required modules
import { Pagination, Navigation } from "swiper";

//img
import Logo1 from "../../assets/img/banner-img4.jpg";
import Logo3 from "../../assets/img/banner-img6.jpg";
import Video1 from "../../assets/video/banner-video1.mp4";

//components
import BannerComponent from "./BannerComponent";

//styles
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                navigation={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    {" "}
                    <BannerComponent
                        type="img"
                        img={Logo1}
                        title="PUMP FOR THE PEOPLE"
                        description=" A new Pump Omni Zone II colorway is here. A familiar look with classic green accents and a limited-edition parquet sockliner graphic."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <BannerComponent
                        type="video"
                        video={Video1}
                        title="REEBOK | SMILEY®"
                        description="Celebrate the 50th anniversary of the original Smiley® with a redesigned Classic Leather Pump"
                    />{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <BannerComponent
                        type="img"
                        img={Logo3}
                        title="REEBOK | SMILEY®"
                        description="Celebrate the 50th anniversary of the original Smiley® with a redesigned Classic Leather Pump"
                    />{" "}
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
