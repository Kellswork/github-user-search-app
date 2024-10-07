import './mocks/matchMedia'

import { render, screen } from "@testing-library/react";
import App from "./App";

describe('App Intergration Tests', () => {

  beforeEach(() => {
    fetchMock.resetMocks();
  })

  test("renders App", () => {
    render(<App />);
    const navElement = screen.getByText("devfinder");
    expect(navElement).toBeInTheDocument();
  });

  describe('Search Functionality', () => {
    test('Updates selected User when search button is clicked')
  })

})

/**
 * 0. 'on page load, API is called with octocat as the default selected user': the fetch api should have been called with octact as the selectd user and check ythat octatc is diplayed on the ui.
 * 1.'updates selectedUser on button click and fetches data'
 * 2. isloading is true, 'shows skeleton loader when isLoading is true'
 * 3. error object is not null, shows error message when API call fails
 * 4. data is not null, updates UserBio with fetched user data
 * 
 */