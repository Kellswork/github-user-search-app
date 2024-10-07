/**

 *
 * Intergration Test
 * 1. Test that when you change to dark mode or light mode, the styles are applied to
 *  a. SearchBar
 *  b. UserBio
 *  c. Suggestion List
 */

import { fireEvent, render, screen } from "@testing-library/react";
import ThemeToggle from ".";

describe("ThemeToggle Component", () => {
  test("changes to dark mode when clicked if current mode is light", () => {
    // Arrange
    const mockToggleTheme = jest.fn();
    render(<ThemeToggle theme="light" toggleTheme={mockToggleTheme} />);

    // Act
    fireEvent.click(screen.getByRole("button"));
    const themeToggle = screen.getByTestId("theme-toggle");

    // Assert
    expect(themeToggle).toHaveTextContent("Dark");
    expect(mockToggleTheme).toHaveBeenCalled();
  });

  test("changes to light mode when clicked if current mode is dark", () => {
    // Arrange
    const mockToggleTheme = jest.fn();
    render(<ThemeToggle theme="dark" toggleTheme={mockToggleTheme} />);

    // Act
    fireEvent.click(screen.getByRole("button"));
    const themeToggle = screen.getByTestId("theme-toggle");
    // Assert
    expect(themeToggle).toHaveTextContent("Light");
    expect(mockToggleTheme).toHaveBeenCalled();

  });
});
