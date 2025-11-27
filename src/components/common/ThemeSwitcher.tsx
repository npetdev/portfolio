import { useTheme } from "../../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-switcher"
      onClick={toggleTheme}
      aria-label="Toggle dark/light theme"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
