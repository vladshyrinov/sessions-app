import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeSwitcher from "./ThemeSwitcher";
import { useThemeStore } from "../../../store/themeStore";

vi.mock("./ThemeSwitcher.module.css", () => {
  return {
    default: {},
  };
});

describe("<ThemeSwitcher />", () => {
  beforeEach(() => {
    const { setState } = useThemeStore;
    setState({
      isDarkMode: false,
    });
    document.documentElement.classList.remove("dark");
  });

  it('renders the button with initial label "🌙 Dark"', () => {
    render(<ThemeSwitcher />);
    expect(
      screen.getByRole("button", {
        name: /toggle theme/i,
      })
    ).toHaveTextContent("🌙 Dark");
  });

  it("toggles theme on click and updates label", async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);

    const button = screen.getByRole("button", {
      name: /toggle theme/i,
    });
    expect(button).toHaveTextContent("🌙 Dark");

    await user.click(button);
    expect(button).toHaveTextContent("☀️ Light");
  });

  it('adds and removes "dark" class from <html>', async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);

    expect(document.documentElement.classList.contains("dark")).toBe(false);

    await user.click(screen.getByRole("button"));
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    await user.click(screen.getByRole("button"));
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
