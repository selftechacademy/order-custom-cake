/*eslint-disable*/
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { GiCupcake } from "react-icons/gi";
import { GiPlayButton } from "react-icons/gi";

import "./footer.style.scss";
const Footer = () => {
	const [order, setOrder] = useState("");
	const [email, setEmail] = useState("");

	const onClickHandler = () => {
		setOrder(order);
		console.log("Order is clicked!");
	};
	const onInputHandler = (e) => {
		setEmail(e.target.value);
		console.log(email);
	};
	return (
		<div className="footer">
			<GiCupcake
				style={{
					fontSize: "80px",
					marginTop: "32px",
					transform: "rotate(-0.03turn)",
					color: "#EB455F",
				}}
			/>

			<div className="footer-container">
				<h4>Get in touch!</h4>
				<div className="footer-container__icon">
					<input
						onChange={onInputHandler}
						className="footer-container__input"
						placeholder="Email address"
					/>
					<span>
						{" "}
						<GiPlayButton className="footer-container__order" />
					</span>
				</div>
			</div>
			<div>
				<h4>Our Social Communities</h4>
				<div className="footer__icons">
					<a href="https://www.instagram.com/">
						<FaInstagram style={{ color: "red", fontSize: "25px" }} />
					</a>
					<a href="https://business.facebook.com/login/web/">
						<FaSquareFacebook style={{ color: "blue", fontSize: "25px" }} />
					</a>
					<a href="https://www.tiktok.com/login">
						<FaTiktok style={{ fontSize: "25px", color: "black" }} />
					</a>
					<a href="https://www.whatsapp.com/">
						<RiWhatsappFill style={{ color: "green", fontSize: "25px" }} />
					</a>
				</div>
			</div>
			<div className="footer__order">
				<h4>What are you waiting for?</h4>
				<button onClick={onClickHandler} className="footer__btn">
					Order now
				</button>
			</div>
		</div>
	);
};

export default Footer;
