import Header from "../components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

export default RootLayout;
