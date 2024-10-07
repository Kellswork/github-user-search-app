import { render, screen } from "@testing-library/react";

import UserStats from ".";

describe("UserStats component", () => {
  test("renders user data when data is provided", async () => {
    // arrange
    render(<UserStats label="repos" value={112} />);

    //assert
    expect(screen.getByText("repos")).toBeInTheDocument();
    expect(screen.getByText("112")).toBeInTheDocument();
  });
});
