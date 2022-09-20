import { screen, render, fireEvent } from "../test-utils";
import { MemoryRouter } from "react-router-dom";

import ChatBox from "../components/common/ChatBox";
describe("ChatBox", () => {
	test("renders default state", () => {
		render(
			<MemoryRouter initialEntries={["/dashboard"]}>
				<ChatBox />
			</MemoryRouter>
		);

		const messageField = screen.getByTestId("chat-input");
		const submitButton = screen.getByTestId("send-button");
		const messageTexts = screen.queryAllByTestId("message-text");
		const noMessageText = screen.queryByTestId("no-message-text");

		expect(messageField).toBeInTheDocument();
		expect(messageField).toHaveValue("");
		expect(submitButton).toBeInTheDocument();
		expect(submitButton).toBeDisabled();
		expect(messageTexts).toHaveLength(0);
		expect(noMessageText).toBeInTheDocument();
		expect(noMessageText).toHaveTextContent("no message history");
	});

	test("renders a input field correctly", () => {
		const testValue = "test";
		render(
			<MemoryRouter initialEntries={["/dashboard"]}>
				<ChatBox />
			</MemoryRouter>
		);

		const messageField = screen.getByTestId("chat-input");
		const submitButton = screen.getByTestId("send-button");

		fireEvent.change(messageField, { target: { value: testValue } });

		expect(messageField).toBeInTheDocument();
		expect(messageField).toHaveValue(testValue);
		expect(submitButton).toBeInTheDocument();
		expect(submitButton).not.toBeDisabled();
	});

	test("renders a message", () => {
		const testValue = "test";
		render(
			<MemoryRouter initialEntries={["/dashboard"]}>
				<ChatBox />
			</MemoryRouter>
		);

		const messageField = screen.getByTestId("chat-input");
		const submitButton = screen.getByTestId("send-button");
		fireEvent.change(messageField, { target: { value: testValue } });
		fireEvent.click(submitButton);
		const messageTexts = screen.getAllByTestId("message-text");

		expect(messageField).toBeInTheDocument();
		expect(messageField).toHaveValue("");
		expect(submitButton).toBeInTheDocument();
		expect(submitButton).toBeDisabled();
		expect(messageTexts).toHaveLength(1);
		expect(messageTexts[0]).toHaveTextContent(testValue);
		localStorage.clear();
	});

	test("renders multiple messages", () => {
		const testValue1 = "test1";
		const testValue2 = "test2";
		render(
			<MemoryRouter initialEntries={["/dashboard"]}>
				<ChatBox />
			</MemoryRouter>
		);

		const messageField = screen.getByTestId("chat-input");
		const submitButton = screen.getByTestId("send-button");

		fireEvent.change(messageField, { target: { value: testValue1 } });
		fireEvent.click(submitButton);
		fireEvent.change(messageField, { target: { value: testValue2 } });
		fireEvent.click(submitButton);

		const messageTexts = screen.getAllByTestId("message-text");

		console.log({ value: messageTexts.map((message) => message.textContent) });

		expect(messageField).toBeInTheDocument();
		expect(messageField).toHaveValue("");
		expect(submitButton).toBeInTheDocument();
		expect(submitButton).toBeDisabled();
		expect(messageTexts).toHaveLength(3);
		expect(messageTexts[1]).toHaveTextContent(testValue1);
		expect(messageTexts[2]).toHaveTextContent(testValue2);
	});
});
