/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import { isEmpty } from "../utils/helpers";
import { TAB_ID_KEY } from "../utils/constants";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isAuthenticated: false,
		isLoggingOut: false,
		user: {},
	},
	reducers: {
		logout(state, action) {
			state.isLoggingOut = false;
			state.isAuthenticated = false;
			state.user = {};
			localStorage.clear();
			window.location = "/";
		},
		loginSuccess(state, action) {
			state.isAuthenticated = !isEmpty(action.payload);
			state.user = action.payload;
		},
		login: (state, action) => {
			const { name } = action.payload;
			const userId = sessionStorage.getItem(TAB_ID_KEY);
			sessionStorage.setItem("name", name);
			state.user = { name, userId };
		},
	},
});

export const { logout, loginSuccess, login } = authSlice.actions;

export default authSlice.reducer;
