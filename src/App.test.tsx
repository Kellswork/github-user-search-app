import "./mocks/matchMedia";

import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "./App";
import { KellsworkMockData, octocatMockData } from "./mocks/mockReponseData";

describe("App Intergration Tests", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("displays octocat data on page laod", async () => {
    // arrange: Mock the api response for the fetchCall with Octocat
    fetchMock.mockResponseOnce(JSON.stringify(octocatMockData));
    render(<App />);

    // act
    const title = await screen.findByText("The Octocat");
    const errorMsg = screen.queryByText("No results");

    //assert
    expect(title).toBeInTheDocument();
    expect(errorMsg).not.toBeInTheDocument();
  });

  test("it shows the skeleton looader when data is fetching", async () => {
    // arrange
    fetchMock.mockResponseOnce(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve(JSON.stringify(KellsworkMockData)), 1000)
        )
    );
    render(<App />);

    // ACT: update selectedUser and click the button
    const input = screen.getByTestId("search-input");
    const button = screen.getByTestId("search-button");
    fireEvent.change(input, { target: { value: "Kellswork" } });
    fireEvent.click(button);

    // assert
    expect(await screen.findByTestId("skeleton-loader")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByTestId("skeleton-loader")).not.toBeInTheDocument();
    });
  });

  test("updates selected user on button click and fetches the user data", async () => {
    // arrange
    fetchMock.mockResponseOnce(JSON.stringify(KellsworkMockData));
    render(<App />);

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        "https://api.github.com/users/octocat"
      );
    });

    // act: update selectedUser and click the button
    const input = screen.getByTestId("search-input");
    const button = screen.getByTestId("search-button");
    fireEvent.change(input, { target: { value: "Kellswork" } });
    fireEvent.click(button);

    // assert
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        "https://api.github.com/users/Kellswork"
      );
    });
    expect(await screen.findByText("Software Engineer")).toBeInTheDocument();
  });

  test("renders an message when the API call fails", async () => {
    // arrange
    fetchMock.mockRejectOnce(new Error("No user found"));
    render(<App />);

    // act: update selectedUser and click the button
    const input = screen.getByTestId("search-input");
    const button = screen.getByTestId("search-button");
    const value = "couldnverbeongithublol";
    fireEvent.change(input, { target: { value: value } });
    fireEvent.click(button);

    // assert
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        `https://api.github.com/users/${value}`
      );
    });
    expect(await screen.findByText("No results")).toBeInTheDocument();
    expect(await screen.findByText("The Octocat")).toBeInTheDocument();
  });
});