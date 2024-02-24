// disabling eslint for this file
/* eslint-disable */
import React, { Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import {
	HomePage,
	OrderPage,
	DashboardPage,
	LoginPage,
	SignupPage,
} from "./pages";

import "./App.scss";

function App() {
	const { t } = useTranslation();

	return (
		<div className="App">
			<LanguageSwitcher />
			<header className="App-header">
				<p>{/* <Trans i18nKey="description.part1">{"App.js"}</Trans> */}</p>
				<Trans i18nKey="description.part1">
					Hello {{ name: "galileo" }} you have unread message.
				</Trans>
				<p>{t("description.part1")}</p>
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
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />

				{/* PROTECTED ROUTES */}
				<Route path="/ordercake" element={<ProtectedRoute />}>
					<Route path="/ordercake" element={<OrderPage />} />
				</Route>
				<Route path="/dashboard" element={<ProtectedRoute />}>
					<Route path="/dashboard" element={<DashboardPage />} />
				</Route>
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
