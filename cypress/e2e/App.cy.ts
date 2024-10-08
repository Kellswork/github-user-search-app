describe("SearchBar Flow", () => {
  beforeEach(() => {
    // Visit the app URL (replace with the actual URL of your app)
    cy.visit("http://localhost:3000"); // Adjust to your app's URL
  });

  it("Happy Path: Successfully search and display user data", () => {
    // On page load, ensure the default user (e.g., "octocat") data is displayed
    cy.get(".user-bio").should("contain", "octocat");

    //  Focus on the input field and type a valid username (e.g., "newuser")
    cy.get('input[data-testid="search-input"]').focus().type("kellsw");

    // Verify that the suggestion list appears
    cy.get(".suggestion-list-container").should("be.visible");
    cy.get(".suggestion-list-container li").should("have.length.at.least", 1);

    // Navigate through suggestions using the keyboard (optional, depending on implementation)
    cy.get('input[data-testid="search-input"]').type("{downarrow}");
    cy.get('input[data-testid="search-input"]').type("{downarrow}");
    cy.get("li.active").should("exist");

    // Navigate through suggestions using the keyboard (optional, depending on implementation)
    cy.get('input[data-testid="search-input"]').type("{uparrow}");

    //  Select a suggestion by pressing enter
    cy.get('input[data-testid="search-input"]').type("{enter}");

    // Click the submit button
    cy.get('button[data-testid="search-button"]').click();

    //Check that the loading indicator is visible after clicking the search button

    cy.intercept("GET", "https://api.github.com/user/Kellswork", (req) => {
      req.on("response", (res) => {
        // Check for loading indicator
        cy.get('div[data-testid="skeleton-loader"]').should("be.visible");
      });
    });
    // Verify the UserBio component displays the correct data for the selected user
    cy.get(".user-bio").should("contain", "Kellswork");
    cy.get(".user-bio").should("contain", "Software Engineer");
  });

  it("Error Path: Display error when user does not exist or network fails", () => {
    //On page load, ensure the default user (e.g., "octocat") data is displayed
    cy.get(".user-bio").should("contain", "octocat");

    // Focus on the input field and type a non-existing username
    cy.get('input[data-testid="search-input"]')
      .focus()
      .type("thisuserdoesnotexistberreal");

    // Verify that the suggestion list is empty or doesn't show results
    cy.get(".suggestion-list-container").should("not.exist");

    // Click the submit button
    cy.get('button[data-testid="search-button"]').click();

    cy.intercept(
      "GET",
      "https://api.github.com/user/thisuserdoesnotexistberreal",
      (req) => {
        req.on("response", (res) => {
          // Check for loading indicator
          cy.get('div[data-testid="skeleton-loader"]').should("be.visible");
        });
      }
    );

    // Step 5: Verify that an error message appears
    cy.get(".error-msg").should("be.visible").and("contain", "No results");

    // Verify the UserBio component shows "octocat" data as default
    cy.get(".user-bio").should("contain", "The Octocat");
    cy.get(".user-bio").should("contain", "@octocat");
  });
});
