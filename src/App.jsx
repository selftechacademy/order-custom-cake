import React, { Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { HomePage, OrderPage, DashboardPage } from "./pages";

import "./App.scss";

// const lngs = {
// 	en: { nativeName: "English" },
// 	ru: { nativeName: "Russian" },
// 	tr: { nativeName: "Turkish" },
// };

function App() {
	const { t } = useTranslation();

	return (
		<div className="App">
			<LanguageSwitcher />
			<header className="App-header">
				<p>
					<Trans i18nKey="description.part1">Hello sir</Trans>
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("description.part2")}
				</a>
			</header>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/ordercake" element={<ProtectedRoute />}>
					<Route path="/ordercake" element={<OrderPage />} />
				</Route>
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route />
			</Routes>
		</div>
	);
}

// here app catches the suspense from page in case translations are not yet loaded
export default function WrappedApp() {
	return (
		<Suspense fallback="...is loading">
			<App />
		</Suspense>
	);
}
