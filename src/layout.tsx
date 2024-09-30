import React from "react";
import ThemeToggle from "./components/ThemeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1 className="logo">devfinder</h1>
        <ThemeToggle />
      </header>
      <main>{children}</main>
    </div>
  );
}
