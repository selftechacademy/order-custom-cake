/*eslint-disable*/
// import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

import React, { useState } from "react";
import "./footer.style.scss";

const Footer = () => {
	const [order, setOrder] = useState("");
	const { t } = useTranslation();

	const onClickHandler = () => {
		setOrder(order);
		console.log("Order is clicked!");
	};
	return (
		<div>
			<footer className="footer-section">
				<div className="container">
					<div className="footer-cta">
						<div className="row">
							<div>
								<div className="single-cta">
									<div className="cta-text">
										<h4>{t("footer.location")}</h4>
										<span>{t("footer.address")}</span>
									</div>
								</div>
							</div>
							<div>
								<div className="single-cta">
									<div className="cta-text">
										<h4>{t("footer.phoneNumber")}</h4>
										<span>98765432100</span>
									</div>
								</div>
							</div>
							<div>
								<div className="single-cta">
									<div className="cta-text">
										<h4>{t("footer.mail")}</h4>
										<span>chicago_bakery@gmail.com</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-content ">
						<div className="row">
							<div>
								<div className="footer-widget">
									<div className="footer-social-icon">
										<span>{t("footer.communication")}</span>
										<div className="footer__icons">
											<a href="https://www.instagram.com/">
												<FaInstagram
													style={{ color: "red", fontSize: "25px" }}
												/>
											</a>

											<a href="https://business.facebook.com/login/web/">
												<FaSquareFacebook
													style={{ color: "blue", fontSize: "25px" }}
												/>
											</a>

											<a href="https://www.tiktok.com/login">
												<FaTiktok
													style={{ fontSize: "25px", color: "black" }}
												/>
											</a>

											<a href="https://www.whatsapp.com/">
												<RiWhatsappFill
													style={{ color: "green", fontSize: "25px" }}
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className="footer-widget">
									<div className="footer-widget-heading">
										<h3>{t("footer.links")}</h3>
									</div>
									<ul>
										<li>
											<a href="#">{t("footer.home")}</a>
										</li>
										<li>
											<a href="#">{t("footer.services")}</a>
										</li>
										<li>
											<a href="#">{t("footer.menu")}</a>
										</li>

										<li>
											<a href="#">{t("footer.review")}</a>
										</li>
										<li>
											<a href="#">{t("footer.about")}</a>
										</li>

										<li>
											<a href="#">{t("footer.contact")}</a>
										</li>
									</ul>
								</div>
							</div>
							<div>
								<div className="footer-widget">
									<div className="footer-widget-heading">
										<h3>{t("footer.action")}</h3>
									</div>
									<div className="footer-text">
										<button onClick={onClickHandler} className="footer-btn">
											{t("footer.button")}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright-area">
					<div className="container">
						<div className="row">
							<div>
								<div className="copyright-text">
									<p>
										{t("footer.copyright")}
										<a href="https://codepen.io/anupkumar92/">
											{" "}
											Chicago bakery
										</a>
									</p>
								</div>
							</div>
							<div>
								<div className="footer-menu">
									<ul>
										<li>
											<a href="#">{t("footer.homeLink")}</a>
										</li>
										<li>
											<a href="#">{t("footer.terms")}</a>
										</li>
										<li>
											<a href="#">{t("footer.privacy")}</a>
										</li>
										<li>
											<a href="#">{t("footer.policy")}</a>
										</li>
										<li>
											<a href="#">{t("footer.phone")}</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
