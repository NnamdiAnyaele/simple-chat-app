import { render, screen } from "@testing-library/react";
import Login from "../view/Pages/Login";

describe("Login", () => {
    test("renders Login component", () => {
        render(<Login />);
        const welcomeText = screen.getByText(/welcome/i);
        expect(welcomeText).toBeInTheDocument();
    });
})
