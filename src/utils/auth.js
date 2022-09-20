import { TAB_ID_KEY } from "./constants";

const auth = {
	authenticate: () => {
		const loggedIn =
			sessionStorage.getItem("name") && sessionStorage.getItem(TAB_ID_KEY);
		if (loggedIn) {
			return true;
		}
		return false;
	},
};

export default auth;
