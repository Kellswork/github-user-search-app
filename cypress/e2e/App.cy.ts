describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

/**
 * For when I add cypress
 * Test complete flow
 * Happy Part
 * On page laod, the data loaded is octatc
 * 1. Start with the SearchBar and focus on the input field.
 * 2. Type a username and verify that suggestions appear
 * 3. Navigate through suggestions and select one.
 * 4. Click the submit button and check that the URL updates and the UserBio displays the correct user data
 * 
 * Error Part
 * on page laod the data laoded is octocat
 * Start with the SearchBar and focus on the input field.
 * Enter a username that does not exist or trigger a network error. 
 * Verify that the error message appears in the SearchBar and 
 * the UserBio shows the default "octocat" data.
 */