/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
	name: "message",
	initialState: {
		messages: [],
	},
	reducers: {
		setMessage(state, action) {
			const { message, user } = action.payload;
			state.messages = [
				...state.messages,
				{ message, userId: user.userId, name: user.name },
			];
			localStorage.setItem("messages", JSON.stringify(state.messages));
		},
		recoverMesages(state, action) {
			state.messages = action.payload;
		},
		updateMessage(state, action) {
			const currentMessages = localStorage.getItem("messages");
			const messages = JSON.parse(currentMessages);
			state.messages = messages;
		},
	},
});

export const { setMessage, recoverMesages, updateMessage } =
	messageSlice.actions;

export default messageSlice.reducer;
