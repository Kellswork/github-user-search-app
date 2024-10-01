import themeIcon from '../../assets/images/icon-moon.svg';
import './index.scss';

export default function ThemeToggle() {
  return (
    <button className="theme-toggle-container">
      <span>Dark</span>
      <img src={themeIcon} alt="" />
    </button>
  );
}
