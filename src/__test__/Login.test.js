import { render, screen, fireEvent } from "../test-utils";
import { MemoryRouter } from "react-router-dom";
import Login from "../view/Pages/Login";

describe("Login", () => {
	test("renders default state", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<Login />
			</MemoryRouter>
		);

		const usernameField = screen.getByTestId("username-input");
		const submitButton = screen.getByTestId("login-button");

		expect(usernameField).toBeInTheDocument();
		expect(usernameField).toHaveValue("");
		expect(submitButton).toBeInTheDocument();
		expect(submitButton).toBeDisabled();
	});

	test("renders error state", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<Login />
			</MemoryRouter>
		);

		const usernameField = screen.getByTestId("username-input");
		const submitButton = screen.getByTestId("login-button");

        fireEvent.click(submitButton);

		expect(usernameField).toBeInTheDocument();
		expect(usernameField).toHaveValue("");
		expect(submitButton).toBeInTheDocument();
		expect(submitButton).toBeDisabled();
	});

	test("renders success state", () => {
        const testValue = "test";
		render(
			<MemoryRouter initialEntries={["/"]}>
				<Login />
			</MemoryRouter>
		);

		const usernameField = screen.getByTestId("username-input");
		const submitButton = screen.getByTestId("login-button");

		fireEvent.change(usernameField, { target: { value: testValue } });
		fireEvent.click(submitButton);

		expect(usernameField).toBeInTheDocument();
		expect(usernameField).toHaveValue(testValue);
		expect(submitButton).toBeInTheDocument();
		expect(submitButton).not.toHaveClass("Mui-disabled");
	});
});
