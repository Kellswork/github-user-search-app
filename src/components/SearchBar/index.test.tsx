import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import SearchBar from '.';



/**
 * 2. showing suggestion: smulate typing in the input field and the suggestion list is showing
 * 3. keyboard navigation: 
 *  a. test keyboard events, up down, enter
 *  b. suggestion is highlighted
 * 4. Test keyboard enter: when suggestion is clicked, when a suggestion is clicked, it populates the input field correctly.
 * 5.verify that clicking the submit buton 
 *  a. calls the correct function.
 *  b. updates the URL with the selected name.
 * 6. Test that if is noUserError not empty and the usernam is empty, then the error message will be displayed.
 */
describe('Search Component',()=> {

  const setSelectedUserMock = jest.fn();
  const noUserErrorMock = null;

  test('renders the search component with input, button and the suggestion list is not shown', () => {
    // arrange
    render(<SearchBar setSelectedUser={setSelectedUserMock} noUserError={noUserErrorMock} />);
    // act
    const input = screen.getByTestId('search-input');
    const button = screen.getByTestId('search-button');
    const list = screen.queryByTestId('suggestion-list');

    // asert
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(list).not.toBeInTheDocument();
  });
})