import React from "react";
import ThemeToggle from "./components/ThemeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-container">
      <header className="main-container__header">
        <div className="logo">devfinder</div>
        <ThemeToggle />
      </header>
      <main>{children}</main>
    </div>
  );
}
