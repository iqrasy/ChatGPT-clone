import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Script from "./Script.js";
import GlobalStyles from "./GlobalStyle.js";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<GlobalStyles />
				<Routes>
					<Route path="/home" element={<Script />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
