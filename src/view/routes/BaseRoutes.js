import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";

import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

const BaseRoute = () => {
	// const { user } = useSelector((state) => state.auth);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default BaseRoute;
