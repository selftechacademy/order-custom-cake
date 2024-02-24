/* eslint-disable */
import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

export default function Copyright(props) {
	const { t } = useTranslation();
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{t("copyright")} ©
			<Link color="inherit" href="https://chicagobakes.com">
				Chicagobakes.com
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}
