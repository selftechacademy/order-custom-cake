import React, { Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";

import "./App.css";

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
