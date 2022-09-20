import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import messageSlice from "../slices/messageSlice";

export const store = configureStore({
	reducer: {
		auth: authSlice,
		message: messageSlice,
	},
});
