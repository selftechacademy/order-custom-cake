import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, Menu } from "@mui/material";
import { LanguageOutlined } from "@mui/icons-material";

function LanguageSwitcher() {
	const [currentLanguage, setCurrentLanguage] = useState("en");
	const [anchorEl, setAnchorEl] = useState(null);
	const { i18n } = useTranslation();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		setCurrentLanguage(language);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<FormControl>
			<IconButton onClick={handleClick}>
				<LanguageOutlined />
				{currentLanguage}
			</IconButton>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem
					onClick={() => {
						changeLanguage("en");
						handleClose();
					}}
					value="en"
				>
					English
				</MenuItem>
				<MenuItem
					onClick={() => {
						changeLanguage("ru");
						handleClose();
					}}
					value="ru"
				>
					Русский
				</MenuItem>
				<MenuItem
					onClick={() => {
						changeLanguage("tr");
						handleClose();
					}}
					value="tr"
				>
					Türkçe
				</MenuItem>
			</Menu>
		</FormControl>
	);
}

export default LanguageSwitcher;
