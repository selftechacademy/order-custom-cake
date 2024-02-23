import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./i18n";
import store from "./redux/store";
import theme from "./styles/theme";
import App from "./App";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
