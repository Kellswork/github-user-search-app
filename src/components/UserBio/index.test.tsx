import { render, screen } from "@testing-library/react";

import { KellsworkMockData } from "../../mocks/mockReponseData";
import UserBio from ".";

describe("User Bio Unit Test", () => {
  test("renders user data when data is provided", async () => {
    // arrange
    render(<UserBio data={KellsworkMockData} />);

    // act
    const name = screen.getByText("Kelechi Ogbonna");
    const dateJoined = screen.getByText("Joined 6 Feb 2017");
    const login = screen.getByText("@Kellswork");
    const bio = screen.getByText("Software Engineer");

    //assert
    expect(name).toBeInTheDocument();
    expect(dateJoined).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(bio).toBeInTheDocument();
  });

  test("renders default octocat user and text when data is not available", async () => {
    // arrange
    render(<UserBio data={null} />);

    //act
    const name = screen.getByText("The Octocat");
    const dateJoined = screen.getByText("Joined 25 Jan 2011");
    const login = screen.getByText("@octocat");
    const bio = screen.getByText("This profile has no bio");
    const followingCount = screen.getByText("9");

    //assert
    expect(name).toBeInTheDocument();
    expect(dateJoined).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(bio).toBeInTheDocument();
    expect(followingCount).toBeInTheDocument();
  });
});
