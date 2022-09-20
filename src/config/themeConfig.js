import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const customTheme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#7459F5",
			dark: "#3811f1",
			light: "#9c89f8",
		},
		secondary: {
			light: "#f89c89",
			main: "#f57459",
			dark: "#f13811",
		},
		error: {
			main: red[800],
		},
	},
	status: {
		danger: red[500],
	},
	typography: {
		fontFamily: "Montserrat, sans-serif, 'Digital-7 Mono'",
	},
});

const theme = responsiveFontSizes(customTheme);

export default theme;
