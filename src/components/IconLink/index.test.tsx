import { render, screen } from "@testing-library/react";
import IconLInk from ".";
import companyIcon from "../../assets/images/icon-company.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";

describe("IconLink component", () => {
  test("renders link with icon and text when name and link are provided", async () => {
    // arrange
    render(
      <IconLInk
        name="github"
        imgSrc={companyIcon}
        altText="Company Icon"
        link="https://github.com/github"
      />
    );

    //assert
    expect(screen.getByText("github")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Company Icon" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "github" })).toHaveAttribute(
      "href",
      "https://github.com/github"
    );
    expect(screen.getByRole("link", { name: "github" })).toHaveAttribute(
      "target",
      "_blank"
    );
    expect(screen.getByRole("link", { name: "github" })).toHaveAttribute(
      "rel",
      "noopener noreferrer"
    );
  });

  test("renders text without a link when only name is provided", async () => {
    // arrange
    render(
      <IconLInk name="github" imgSrc={companyIcon} altText="Company Icon" />
    );

    //assert
    expect(screen.getByText("github")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Company Icon" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "github" })
    ).not.toBeInTheDocument();
  });

  test("renders 'not available' when no name is provided", async () => {
    // arrange
    render(<IconLInk name="" imgSrc={twitterIcon} altText="Twitter Icon" />);

    // act
    const iconLinkItem = screen.getByTestId("icon-link-disabled");
    //assert
    expect(screen.getByText("not available")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Twitter Icon" })
    ).toBeInTheDocument();
    expect(iconLinkItem).toHaveClass("disabled");
  });
});
