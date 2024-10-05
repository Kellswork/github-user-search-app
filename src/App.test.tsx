import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


/**
 * Intergration Test
 * - search functionality: Simulate the user entering a username, navigating suggestions, and submitting the search. Check that the URL updates and that the UserBio component updates with the correct data.
 * 1. simulate typing in the search box. check that
 *  a. suggestion list is present and open
 * 2. test that when you click the button, selectedUser is updated with the value from the input box
 * 3. test that on load, the selectedUser is 'octact'.
 * 4. Network Test
 *  a.Test that when the state isLoading is true, the skeletal laoder is what is being shown
 *
 * -  Error handling flow: Simulate a network error or user not found error and check if the error message displays in the SearchBar and that the default UserBio data shows.
 * 
 * - successful fetch: Verify that after a successful fetch, the UserBio updates with the new user data. verify that the initail fetch is with octact.
 * 
 * Implemntation Tips
 * - mocking: use ject.mock for network calls for unit tests, mostly for the components in app.
 * - snapshot testing for UI presentational components ie UserBio to verify UI consistentcy.
 * 
 */

