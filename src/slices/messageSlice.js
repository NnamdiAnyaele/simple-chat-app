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
			const { message, userId, name } = action.payload;
			state.messages = [...state.messages, { message, userId, name }];
		},
	},
});

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
