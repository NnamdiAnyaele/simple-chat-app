import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { store } from "../store/index";
import customTheme from "../config/themeConfig";

function AppProviders({ children }) {
	return (
		<Provider store={store}>
			<ThemeProvider theme={customTheme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</Provider>
	);
}

export default AppProviders;
