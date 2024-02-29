/*eslint-disable*/
import React from "react";
import { useTranslation } from "react-i18next";
import quality from "../../components/iconsBakes/assets/quality icon.jpeg";
import cake2 from "../../components/iconsBakes/assets/customcake.jpeg";
import "./iconBakes.style.scss";

const icons = [
	{
		text: "iconWithText.everydayCooking",
		icon: "https://i.pinimg.com/564x/09/cd/70/09cd70a3e4461fd149c4897c5db30c8f.jpg",
		description: "iconWithDescription.everydayCooking",
	},
	{
		text: "iconWithText.quality",
		icon: quality,
		description: "iconWithDescription.quality",
	},
	{
		text: "iconWithText.customCakes",
		icon: cake2,
		description: "iconWithDescription.customCakes",
	},
	{
		text: "iconWithText.freshIngredients",
		icon: "https://i.pinimg.com/564x/93/f2/70/93f270dd7b99cbb2803d8bdc72d6a129.jpg",
		description: "iconWithDescription.freshIngredients",
	},
	{
		text: "iconWithText.fastDelivery",
		icon: "https://i.pinimg.com/564x/7f/d6/9b/7fd69b4c0efe591c5438e8b4439beafa.jpg",
		description: "iconWithDescription.fastDelivery",
	},
	{
		text: "iconWithText.attentionToDetail",
		icon: "https://i.pinimg.com/474x/df/4e/07/df4e0731f6adba1d6928b5ad101b51b9.jpg",
		description: "iconWithDescription.attentionToDetail",
	},
];

const IconsBakes = () => {
	const { t } = useTranslation();
	return (
		<div className="icons-container">
			<div className="topic-container">
				<h2 className="topic-text">{t("iconWithText.title")}</h2>
			</div>
			<div className="icons-box">
				{icons.map((el, index) => (
					<div key={index} className="icons-item">
						<img className="icon" src={el.icon} alt="icon" />
						<h4 className="item-name">{t(el.text)}</h4>
						<p className="description">{t(el.description)}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default IconsBakes;
