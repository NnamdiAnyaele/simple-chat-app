import { store } from "./store/index";
import useId from "./hooks/useId";
import auth from "./utils/auth";
import { loginSuccess } from "./slices/authSlice";
import { recoverMesages } from "./slices/messageSlice";
import { TAB_ID_KEY } from "./utils/constants";
import BaseRoute from "./view/routes/BaseRoutes";
import AppProviders from "./providers/AppProviders";
import "react-toastify/dist/ReactToastify.css";

if (auth.authenticate()) {
	const name = sessionStorage.getItem("name");
	const userId = sessionStorage.getItem(TAB_ID_KEY);
	const messages = JSON.parse(localStorage.getItem("messages")) || [];
	store.dispatch(
		loginSuccess({
			name,
			userId,
		})
	);
	store.dispatch(recoverMesages(messages));
}

function App() {
	useId();

	return (
		<AppProviders>
			<BaseRoute />
		</AppProviders>
	);
}

export default App;
