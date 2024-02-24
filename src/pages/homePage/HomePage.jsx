import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import imgSrc from "../../assets/images/hero-image.jpg";

export default function HomePage() {
	const onClickHandler = () => alert("hello");

	return <div>
		<HeroSection imgSrc={imgSrc} onClickHandler={onClickHandler}/>
	</div>;
}
