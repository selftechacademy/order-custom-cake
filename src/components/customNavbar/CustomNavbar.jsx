/* eslint-disable */
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import {
	CloseOutlined,
	MenuOutlined,
	ShoppingCartOutlined,
} from "@mui/icons-material";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

import "./customNavbar.style.scss";

const CustomNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();
	const navList = [
		"navbar.home",
		"navbar.about",
		"navbar.contact",
		"navbar.login",
	];
	const logoUrl =
		"https://static1.squarespace.com/static/628c084d9a279d20d02dbc3e/t/64d11479b2457609bc9389fc/1691423865572/TheBakehouseChicago-Logo2-Color.png?format=1500w";

	return (
		<div className="container">
			<div className="navbar">
				<img
					className="navbar__logo"
					src={logoUrl}
					alt="Chicago Bakes"
					width={"50px"}
				/>

				<div className="navbar__nav">
					<ul className="navbar__nav__ul">
						{navList.map((el, index) => (
							<li className="navbar__nav__ul__li" id={el.slice(-5)} key={index}>
								{t(el)}
							</li>
						))}
					</ul>

					<LanguageSwitcher />

					<IconButton className="navbar__nav__cart-btn">
						<ShoppingCartOutlined />
					</IconButton>

					<IconButton
						sx={{ display: "none" }}
						className="navbar__nav__menu-btn"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <CloseOutlined /> : <MenuOutlined />}
					</IconButton>
				</div>
				{isOpen ? (
					<div className="mobile-navbar">
						<ul className="mobile-navbar__ul">
							{navList.map((el, index) => (
								<li
									className="mobile-navbar__ul__li"
									id={el.slice(-5)}
									key={index}
								>
									{t(el)}
								</li>
							))}
						</ul>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default CustomNavbar;
