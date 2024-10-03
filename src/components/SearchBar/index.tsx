import React, { Suspense, useDeferredValue, useState } from "react";
import searchIcon from "../../assets/images/icon-search.svg";
import "./index.scss";
import SuggestionList from "./SuggestionList";

export default function SearchBar() {
  const [username, setUsername] = useState<string>("");
  const defferedQuery = useDeferredValue(username);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  return (
    <>
      <div className="search-container">
        <img src={searchIcon} alt="" />
        <input
          value={username}
          onChange={handleInputChange}
          placeholder="Search GitHub username..."
        />
        <span className="error-msg"></span>
        <button className="search-container__btn">Search</button>
      </div>
      <Suspense fallback="loading">
        <div>
          <SuggestionList query={defferedQuery} />
        </div>
      </Suspense>
    </>
  );
}

// if an error occurs or no data is found, let the suggestion list be empty
// add a shaow to the background when the suggestion list is shown
// show the first 5 suggestions from the list
// if you add the dark aoverlay to the background, remove the box shadow on the suggestion list
//
// if a user clicks a suggestion, set it as the input feild value
// implement accesibility with keyboard
// implemnet accessinbility with aria if needed
// clear the suggestion list when a user selects a suggestion

/* Bonus 
1. Add animation forsmooth tansition of the suggestion list
*/
