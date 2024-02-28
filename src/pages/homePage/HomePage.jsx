import React from "react";
import IconsBakes from "../../components/iconsBakes/IconBakes";
import HeroSection from "../../components/heroSection/HeroSection";
import imgSrc from "../../assets/images/hero-image.jpg";
import Footer from "../../components/footer/Footer";

export default function HomePage() {
	const onClickHandler = () => alert("hello");

	return (
		<div>
			<HeroSection imgSrc={imgSrc} onClickHandler={onClickHandler} />
			<IconsBakes />
			<Footer/>
		</div>
	);
}
