/*eslint-disable*/
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import IconsBakes from "../../components/iconsBakes/IconBakes";
import HeroSection from "../../components/heroSection/HeroSection";
import imgSrc from "../../assets/images/hero-image.jpg";
import SliderImages from "../../components/sliderImages/SliderImages";
import ProfileTab from "../../components/profileTab/ProfileTab";
import Footer from "../../components/footer/Footer";
import Testimonials from "../../components/testimonials/Testimonials";
import StepsContainer from "../../components/stepContainer/StepContainer";

export default function HomePage() {
	const onClickHandler = () => alert("hello");

	return (
		<div>
			<Navbar />
			{/* <ProfileTab /> */}
			<HeroSection imgSrc={imgSrc} onClickHandler={onClickHandler} />
			<IconsBakes />
			<Testimonials />
			<StepsContainer />
			{/* <SliderImages /> */}
			<Footer />
		</div>
	);
}
