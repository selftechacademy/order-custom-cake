/*eslint-disable*/
import React from "react";
import "./heroSection.style.scss";
import { useTranslation } from "react-i18next";

function HeroSection({ imgSrc, style = {}, onClickHandler }) {
    const { t } = useTranslation();

    return <div className="hero" style={style}>
        <div className="hero-info">
            <h1 className="hero-info__h1">{t("hero.title")}</h1>
            <p className="hero-info__p">{t("hero.subTitle")}</p>
            <button className="hero-info__button" onClick={onClickHandler}>{t("hero.orderNow")}</button>
        </div>
        <img className="hero__img" src={imgSrc} alt="" />
    </div>
}

export default HeroSection;