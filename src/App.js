import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";

import { store } from "./store/index";
import customTheme from "./config/themeConfig";
import useId from "./hooks/useId";
import auth from "./utils/auth";
import { loginSuccess } from "./slices/authSlice";
import { TAB_ID_KEY } from "./utils/constants";
import BaseRoute from "./view/routes/BaseRoutes";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

if (auth.authenticate()) {
	const name = sessionStorage.getItem("name");
	const userId = sessionStorage.getItem(TAB_ID_KEY);
	store.dispatch(
		loginSuccess({
			name,
			userId,
		})
	);
}

function App() {
	useId();

	return (
		<Provider store={store}>
			<ThemeProvider theme={customTheme}>
				<ToastContainer />
				<BaseRoute />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
