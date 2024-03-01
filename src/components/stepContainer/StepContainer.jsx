/* eslint-disable */
import React from "react";
import "./stepContainer.style.scss";
import { useTranslation } from "react-i18next";

const OrderSteps = ({
	img,
	text,
	header,
	number,
	detail,
	numberStyle,
	imgWidth,
	imgHeight,
	handleCustomCakeClick,
}) => {
	const { t } = useTranslation();
	const translatedText = t(text);
	const translatedDetail = t(detail);
	return (
		<div>
			<h1>{header}</h1>
			<div className="box">
				<div className="container">
					<div>
						<img
							className="img-steps"
							src={img}
							alt="order"
							width={imgWidth}
							height={imgHeight}
						/>
					</div>
					<div className="details">
						<div className="number" style={numberStyle}>
							{number}
						</div>
						<div className="text">
							<h1> {translatedText}</h1>
							<p>{translatedDetail}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const First = {
	args: {
		img: "https://cdn-icons-png.flaticon.com/512/5220/5220625.png",
		text: "order-works.take-order",
		detail: "order-works.choose-cake",
		number: "1",
		numberStyle: { fontSize: "30px", color: "gray", fontWeight: "bold" },
		imgWidth: "200px",
	},
};
const Second = {
	args: {
		img: "https://as2.ftcdn.net/v2/jpg/04/19/09/45/1000_F_419094559_v0igzFLh7iqp0F3SCQcBdVXgc6KMqxDc.jpg",
		text: "order-works.bake",
		detail: "order-works.bake-text",
		number: 2,
		numberStyle: { fontSize: "30px", color: "gray", fontWeight: "bold" },
		imgWidth: "200px",
	},
};
const Third = {
	args: {
		img: "https://st2.depositphotos.com/8322640/44432/v/1600/depositphotos_444325028-stock-illustration-bakery-girl-going-cake-delivery.jpg",
		text: "order-works.delivery",
		detail: "order-works.delivery-text",
		number: 3,
		numberStyle: { fontSize: "30px", color: "gray", fontWeight: "bold" },
		imgWidth: "200px",
	},
};

const StepsContainer = () => {
	const { t } = useTranslation();
	return (
		<div className="step__container">
			<h1 className="step__container__title">{t("order-works.howWorks")}</h1>
			<div className="step__container__wrapper">
				<OrderSteps {...First.args} />

				<img
					className="step__container__wrapper__img"
					src="https://cdn-icons-png.flaticon.com/128/7893/7893890.png"
					width={"80px"}
					height={"80px"}
					style={{ transform: "rotate(50deg)", marginTop: "-20px" }}
				/>
				<OrderSteps {...Second.args} />
				<img
					className="step__container__wrapper__img"
					src="https://cdn-icons-png.flaticon.com/128/7893/7893890.png"
					width={"80px"}
					height={"80px"}
					style={{
						transform: "rotate(130deg) scaleX(-1)",
						marginBottom: "-20px",
					}}
				/>
				<OrderSteps {...Third.args} />
			</div>
			<div>
				<button className="step__container__button">
					{t("order-works.custom-cake")}
				</button>
			</div>
		</div>
	);
};

export default StepsContainer;
