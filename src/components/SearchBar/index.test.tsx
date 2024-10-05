import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from '.';

// test('renders learn react link', () => {
//   render(<SearchBar />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

/**
 * 1. search component is rensdered: input field, search iocn and button is present and rendered, the suggestion list is not showing.
 * 2. showing suggestion: smulate typing in the input field and the suggestion list is showing
 * 3. keyboard navigation: 
 *  a. test keyboard events, up down, enter
 *  b. suggestion is highlighted
 * 4. Test keyboard enter: when suggestion is clicked, when a suggestion is clicked, it populates the input field correctly.
 * 5.verify that clicking the submit buton 
 *  a. calls the correct function.
 *  b. updates the URL with the selected name.
 * 6. Test that if is noUserError not empty and the usernam is empty, then the error message will be displayed
 * 
 * 
 */