import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ffa4b3",
			dark: "#ff153e",
			contrastText: "#15112b",
			light: "#fb516d",
		},
		secondary: {
			main: "#f7768d",
			dark: "#b9394e",
		},
	},
});

export default theme;
