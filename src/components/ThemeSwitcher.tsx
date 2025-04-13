import { useEffect } from "react";
import { useThemeStore } from "../store/themeStore";

export default function ThemeSwitcher() {
  const { isDarkMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-10 right-4 z-50 p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
