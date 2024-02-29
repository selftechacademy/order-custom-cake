/*eslint-disable*/
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import IconsBakes from "../../components/iconsBakes/IconBakes";
import HeroSection from "../../components/heroSection/HeroSection";
import imgSrc from "../../assets/images/hero-image.jpg";
import SliderImages from "../../components/sliderImages/SliderImages";

export default function HomePage() {
	const onClickHandler = () => alert("hello");

	return (
		<div>
			<Navbar />
			<HeroSection imgSrc={imgSrc} onClickHandler={onClickHandler} />
			<IconsBakes />
			<SliderImages />
		</div>
	);
}
