import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

const BaseRoute = () => {
	const { user } = useSelector((state) => state.auth);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
};

export default BaseRoute;
