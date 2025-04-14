import { useEffect } from "react";
import { useThemeStore } from "../../../store/themeStore";
import styles from "./ThemeSwitcher.module.css";

export default function ThemeSwitcher() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

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
      className={styles["toggle-theme-button"]}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
