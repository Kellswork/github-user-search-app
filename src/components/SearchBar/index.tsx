import React, { useDeferredValue, useState } from "react";
import searchIcon from "../../assets/images/icon-search.svg";
import "./index.scss";
import SuggestionList from "./SuggestionList";
import { FetchDataProps } from "./type";
import useFetch from "../../hooks/useFetch";


export default function SearchBar({
  setSelectedUser,
}: {
  setSelectedUser: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [username, setUsername] = useState<string>("");
  const url = username ? `https://api.github.com/search/users?q=${username}`: ''; // stop data from fetching when the username is empty
  const { data, error, isLoading } = useFetch<FetchDataProps>(url);
  
  const suggestionList =
    data === undefined || data === null ? [] : data.items.slice(0, 5);

  const [showSuggestion, setShowSuggestion] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const defferedQuery = useDeferredValue(username);

  async function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.currentTarget.value);
    setShowSuggestion(true);
  }

  function handleSuggestionClick(selectedUsername: string) {
    setUsername(selectedUsername);
    setShowSuggestion(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    setSelectedUser(username);
    setUsername("");
  }

  function hanldeKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    switch (e.key) {
      case "ArrowUp":
        activeSuggestion > 0 && setActiveSuggestion((prev) => prev - 1);
        break;
      case "ArrowDown":
        activeSuggestion < suggestionList.length - 1 &&
          setActiveSuggestion((prev) => prev + 1);
        break;
      case "Enter":
        setUsername(suggestionList[activeSuggestion].login);
        setShowSuggestion(false);
    }
  }

  return (
    <>
      <div className="search-container">
        <img src={searchIcon} alt="" />
        <input
          value={username}
          onChange={handleInputChange}
          placeholder="Search GitHub username..."
          onKeyDown={hanldeKeyDown}
        />
        <span className="error-msg"></span>
        <button onClick={handleSubmit} className="search-container__btn">
          Search
        </button>
      </div>
      {showSuggestion && (
        <SuggestionList
          query={defferedQuery}
          handleSuggestionClick={handleSuggestionClick}
          suggestionList={suggestionList}
          error={error}
          activeSuggestion={activeSuggestion}
          isLoading={isLoading}
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
