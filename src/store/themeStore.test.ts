import { useThemeStore } from "./themeStore";

describe("useThemeStore", () => {
  it("initially has dark mode set to false", () => {
    const { isDarkMode } = useThemeStore.getState();
    expect(isDarkMode).toBe(false);
  });

  it("toggles the theme to dark mode", () => {
    useThemeStore.getState().toggleTheme();
    expect(useThemeStore.getState().isDarkMode).toBe(true);
  });

  it("toggles the theme back to light mode", () => {
    useThemeStore.getState().toggleTheme(); // First toggle to dark mode
    useThemeStore.getState().toggleTheme(); // Then toggle back to light mode
    useThemeStore.getState().toggleTheme(); // Toggle again to dark mode
    expect(useThemeStore.getState().isDarkMode).toBe(false);
  });
});
