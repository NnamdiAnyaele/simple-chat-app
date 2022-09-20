import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import { store } from "./store/index";
import customTheme from "./config/themeConfig";
import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={customTheme}>
				<div className="App">Learn React</div>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
