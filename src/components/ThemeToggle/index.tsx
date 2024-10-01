import moonIcon from "../../assets/images/icon-moon.svg";
import sunIcon from "../../assets/images/icon-sun.svg";
import "./index.scss";

interface ThemeTogglePops {
  theme: string;
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeTogglePops) {
  return (
    <button onClick={toggleTheme} className="theme-toggle-container">
      {theme === "light" ? <span>Dark</span> : <span>Light</span>}
      {theme === "light" ? (
        <img src={moonIcon} alt="" />
      ) : (
        <img src={sunIcon} alt="" />
      )}
    </button>
  );
}
