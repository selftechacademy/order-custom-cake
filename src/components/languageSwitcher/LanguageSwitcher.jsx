import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function LanguageSwitcher() {
	const [currentLanguage, setCurrentLanguage] = useState("en");
	const { i18n } = useTranslation();

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		setCurrentLanguage(language);
	};

	return (
		<FormControl>
			<Select
				value={currentLanguage}
				label="Age"
				onChange={(e) => changeLanguage(e.target.value)}
			>
				<MenuItem value="en">English</MenuItem>
				<MenuItem value="ru">Русский</MenuItem>
				<MenuItem value="tr">Türkçe</MenuItem>
			</Select>
		</FormControl>
	);
}

export default LanguageSwitcher;
