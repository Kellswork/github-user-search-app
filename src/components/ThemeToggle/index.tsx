import "./index.scss";
import { MoonIcon } from "./ThemeSVG";
import { SunIcon } from "./ThemeSVG";

interface ThemeTogglePops {
  theme: string;
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeTogglePops) {
  return (
    <button onClick={toggleTheme} className="theme-toggle-container">
      {theme === "light" ? <span data-testid='theme-toggle'>Dark</span> : <span data-testid='theme-toggle'>Light</span>}
      {theme === "light" ? (
        <MoonIcon/>
      ) : (
        <SunIcon/>
      )}
    </button>
  );
}
