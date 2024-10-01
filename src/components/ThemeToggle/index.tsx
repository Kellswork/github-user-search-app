import moonIcon from "../../assets/images/icon-moon.svg";
import sunIcon from "../../assets/images/icon-sun.svg";
import "./index.scss";

export default function ThemeToggle() {
  const theme = "light";
  return (
    <button className="theme-toggle-container">
      {theme === "light" ? <span>Dark</span> : <span>Light</span>}
      {theme === "light" ? (
        <img src={moonIcon} alt="" />
      ) : (
        <img src={sunIcon} alt="" />
      )}
    </button>
  );
}
