import React, { useDeferredValue, useState } from "react";
import searchIcon from "../../assets/images/icon-search.svg";
import "./index.scss";
import SuggestionList from "./SuggestionList";

export default function SearchBar() {
  const [username, setUsername] = useState<string>("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const defferedQuery = useDeferredValue(username);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
    setShowSuggestion(true);
  };

  function handleSuggestionClick(selectedUsername: string){
    setUsername(selectedUsername);
    setShowSuggestion(false);
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
      {showSuggestion && (
        <SuggestionList
          query={defferedQuery}
          handleSuggestionClick={handleSuggestionClick}
        
        />
      )}
    </>
  );
}


// if you add the dark aoverlay to the background, remove the box shadow on the suggestion list
//
// implement accesibility with keyboard
// implemnet accessinbility with aria if needed
// clear the suggestion list when a user selects a suggestion
/* Bonus 
1. Add animation forsmooth tansition of the suggestion list
*/
