import React, { useDeferredValue, useState } from "react";
import searchIcon from "../../assets/images/icon-search.svg";
import "./index.scss";
import SuggestionList from "./SuggestionList";

export default function SearchBar({setSelectedUser}:{setSelectedUser:React.Dispatch<React.SetStateAction<string>>}) {

  const [username, setUsername] = useState<string>("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const defferedQuery = useDeferredValue(username);

  async function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
    setUsername(e.currentTarget.value);
    setShowSuggestion(true);
  };

  function handleSuggestionClick(selectedUsername: string){
    setUsername(selectedUsername);
    setShowSuggestion(false);
  };

  function handleSubmit(e:React.FormEvent<HTMLButtonElement>){
    e.preventDefault();
    setSelectedUser(username);
    setUsername('');
    
  }

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
        <button onClick={handleSubmit} className="search-container__btn">Search</button>
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
