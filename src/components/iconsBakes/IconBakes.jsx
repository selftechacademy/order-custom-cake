/* eslint-disable*/
import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import croissant from "../../components/iconsBakes/assets/croissant.png";
import cake from "../../components/iconsBakes/assets/cake.png";
import fresh from "../../components/iconsBakes/assets/fresh.png";
import time from "../../components/iconsBakes/assets/time.png";
import check from "../../components/iconsBakes/assets/check.png";
import chiefIcon from "../../components/iconsBakes/assets/chief.png";
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

const IconsBakes = ({ variant, backgroundColor, boxShadow }) => {
	const { t } = useTranslation();
	return (
		<div
			className={classNames(`icons-container ${variant}`, {
				"icons-container--style2": variant === "style2",
				"icons-container--style3": variant === "style3",
			})}
		>
			<div className="topic-container">
				<h2
					className={classNames("topic-text", {
						"topic-text--style2": variant === "style2",
						"topic-text--style3": variant === "style3",
					})}
				>
					Why is ChicagoBakes the right choice?
				</h2>
			</div>
			<div
				className={classNames("icons-box", {
					"icons-box--style2": variant === "style2",
					"icons-box--style3": variant === "style3",
				})}
			>
				{icons.map((el, index) => (
					<div
						key={index}
						className={classNames("icons-item", {
							"icons-item--style2": variant === "style2",
							"icons-item--style3": variant === "style3",
						})}
						style={{
							backgroundColor: backgroundColor,
							boxShadow: boxShadow,
						}}
					>
						<img
							className={classNames("icon", {
								"icon--style2": variant === "style2",
								"icon--style3": variant === "style3",
							})}
							src={el.icon}
							alt="icon"
						/>
						<h4
							className={classNames("item-name", {
								"item-name--style2": variant === "style2",
								"item-name--style3": variant === "style3",
							})}
						>
							{t(el.text)}
						</h4>
						<p
							className={classNames("description", {
								"description--style2": variant === "style2",
								"description--style3": variant === "style3",
							})}
						>
							{t(el.description)}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default IconsBakes;
