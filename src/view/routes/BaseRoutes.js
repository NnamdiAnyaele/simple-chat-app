import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";

const BaseRoute = () => {
	const { isAuthenticated } = useSelector((state) => state.auth);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="dashboard"
					element={
						<ProtectedRoutes isAllowed={isAuthenticated}>
							<Dashboard />
						</ProtectedRoutes>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default BaseRoute;
