import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import SessionCreation from "./SessionCreation";
import { useSessionStore } from "../../../store/sessionStore";

vi.mock("./SessionCreation.module.css", () => {
  return {
    default: {},
  };
});

describe("<SessionCreation />", () => {
  it("renders input and disabled button initially", () => {
    render(
      <MemoryRouter>
        <SessionCreation />
      </MemoryRouter>
    );

    expect(
      screen.getByPlaceholderText(/new session name/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /create session/i,
      })
    ).toBeDisabled();
  });

  it("disables the create button when input is empty", () => {
    render(
      <MemoryRouter>
        <SessionCreation />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", {
      name: /create session/i,
    });
    expect(button).toBeDisabled();
  });

  it("enables the create button when input has text", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <SessionCreation />
      </MemoryRouter>
    );

    const input = screen.getByLabelText(/new session name/i);
    await user.type(input, "My session");

    const button = screen.getByRole("button", {
      name: /create session/i,
    });
    expect(button).toBeEnabled();
  });

  it("adds session and navigates on valid input", async () => {
    const user = userEvent.setup();
    const sessionName = "Test Session";

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<SessionCreation />} />
          <Route path="/session/:id" element={<div>Session Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/new session name/i);
    await user.type(input, sessionName);

    const button = screen.getByRole("button", {
      name: /create session/i,
    });
    await user.click(button);

    expect(screen.getByText(/session page/i)).toBeInTheDocument();
  });

  it("submits using Enter key", async () => {
    const user = userEvent.setup();
    const sessionName = "Via Enter";

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<SessionCreation />} />
          <Route path="/session/:id" element={<div>Session Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/new session name/i);
    await user.type(input, `${sessionName}{enter}`);

    expect(screen.getByText(/session page/i)).toBeInTheDocument();

    const sessions = useSessionStore.getState().sessions;
    expect(sessions.some((s) => s.name === sessionName)).toBe(true);
  });

  it("shows error if submitted with empty input via Enter", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <SessionCreation />
      </MemoryRouter>
    );

    const input = screen.getByLabelText(/new session name/i);
    await user.type(input, "{enter}");

    expect(
      await screen.findByText(/session name cannot be empty/i)
    ).toBeInTheDocument();
  });
});
