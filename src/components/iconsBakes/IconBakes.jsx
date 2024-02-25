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
import "./iconBakes.style.scss";

const icons = [
	{
		text: "iconWithText.everydayCooking",
		icon: chiefIcon,
		description: "iconWithDescription.everydayCooking",
	},
	{
		text: "iconWithText.quality",
		icon: croissant,
		description: "iconWithDescription.quality",
	},
	{
		text: "iconWithText.customCakes",
		icon: cake,
		description: "iconWithDescription.customCakes",
	},
	{
		text: "iconWithText.freshIngredients",
		icon: fresh,
		description: "iconWithDescription.freshIngredients",
	},
	{
		text: "iconWithText.fastDelivery",
		icon: time,
		description: " iconWithDescription.fastDelivery",
	},
	{
		text: "iconWithText.attentionToDetail",
		icon: check,
		description: "iconWithDescription.attentionToDetail",
	},
];

const IconsBakes = ({ topic, variant, backgroundColor, boxShadow }) => {
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
					{topic}
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
