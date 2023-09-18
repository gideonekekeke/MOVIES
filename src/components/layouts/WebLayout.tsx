import React from "react";
import Header from "../Blocks/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Blocks/Footer";

const WebLayout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default WebLayout;
