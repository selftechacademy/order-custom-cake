/*eslint-disable*/
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./sliderImages.style.css";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
	EffectCoverflow,
	Pagination,
	Navigation,
	Mousewheel,
} from "swiper/modules";
import SwiperCore from "swiper/core";

import slide_image_1 from "./assets/images/img_1.jpeg";
import slide_image_2 from "./assets/images/img_2.jpeg";
// import slide_image_3 from "./assets/images/img_3.jpeg";
import slide_image_4 from "./assets/images/img_4.jpeg";
import slide_image_5 from "./assets/images/img_5.jpeg";
import slide_image_6 from "./assets/images/img_6.jpeg";
import slide_image_7 from "./assets/images/img_7.jpeg";
// import slide_image_8 from "./assets/images/img_8.jpeg";
import slide_image_9 from "./assets/images/img_9.jpeg";

import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";
SwiperCore.use([Mousewheel, Pagination, Navigation, EffectCoverflow]);

function SliderImages() {
	const { t } = useTranslation();
	return (
		<div className="container">
			<h1 className="font-effect-shadow-multiple">{t("trendy.trendy-cake")}</h1>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={4.5}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
				}}
				pagination={{ el: ".swiper-pagination", clickable: true }}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
					clickable: true,
				}}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className="swiper_container"
			>
				<div className="main"></div>

				<SwiperSlide>
					<img src={slide_image_2} alt="slide_image" />
				</SwiperSlide>
				{/* <SwiperSlide>
					<img src={slide_image_3} alt="slide_image" />
				</SwiperSlide> */}
				<SwiperSlide>
					<img src={slide_image_4} alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide_image_5} alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide_image_6} alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide_image_7} alt="slide_image" />
				</SwiperSlide>
				{/* <SwiperSlide>
					<img src={slide_image_8} alt="slide_image" />
				</SwiperSlide> */}
				<SwiperSlide>
					<img src={slide_image_9} alt="slide_image" />
				</SwiperSlide>
				<div className="slider-controler">
					<div className="swiper-button-prev slider-arrow">
						<SwipeLeftIcon />
					</div>
					<div className="swiper-button-next slider-arrow">
						<SwipeRightIcon />
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</Swiper>
		</div>
	);
}

export default SliderImages;
