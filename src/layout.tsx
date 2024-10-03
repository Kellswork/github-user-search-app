import React, { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";

const prefersColorTheme = window.matchMedia("(prefers-color-scheme: light)")
  .matches
  ? "light"
  : "dark";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(prefersColorTheme);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <div className="main-container" data-theme={theme}>
      <div className="container-width">
        <header className="main-container__header">
          <div className="logo">devfinder</div>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
