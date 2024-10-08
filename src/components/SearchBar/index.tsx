import React, {
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import searchIcon from "../../assets/images/icon-search.svg";
import "./index.scss";
import SuggestionList from "./SuggestionList";
import { FetchDataProps } from "./type";
import useFetch from "../../hooks/useFetch";
import useDebounce from "../../hooks/useDebounce";

export default function SearchBar({
  setSelectedUser,
  noUserError,
}: {
  setSelectedUser: React.Dispatch<React.SetStateAction<string>>;
  noUserError: string | null;
}) {
  const [username, setUsername] = useState<string>("");
  const debounceQuery = useDebounce(username, 300);
  const defferedQuery = useDeferredValue(debounceQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  const url = defferedQuery
    ? `https://api.github.com/search/users?q=${defferedQuery}`
    : ""; // stop data from fetching when the username is empty
  const { data, error, isLoading } = useFetch<FetchDataProps>(url);

  const suggestionList = useMemo(() => {
    return data && data.items ? data.items.slice(0, 5) : [];
  }, [data]);

  const [showSuggestion, setShowSuggestion] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  async function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.currentTarget.value);
    setShowSuggestion(true);
  }

  function handleSuggestionClick(selectedUsername: string) {
    setUsername(selectedUsername);
    setActiveSuggestion(-1);
    setShowSuggestion(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSelectedUser(username);
    setUsername("");
  }

  useEffect(() => {
    const handleFocusOut = (event: globalThis.MouseEvent) => {
      // Check if the click is outside the input element
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestion(false);
      }
    };
    // Add event listener when the component mounts
    document.addEventListener("click", handleFocusOut);
    // Remove the event listener when the component unmounts

    return () => {
      document.removeEventListener("click", handleFocusOut);
    };
  });

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
        console.log(showSuggestion);
        e.preventDefault();

        if (activeSuggestion >= 0) {
          setUsername(suggestionList[activeSuggestion].login);
          setShowSuggestion(false);
          setActiveSuggestion(-1);
        } else {
          e.preventDefault();
          setSelectedUser(username);
          setUsername("");
        }
        break;
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <img src={searchIcon} alt="" />
          <input
            ref={inputRef}
            data-testid="search-input"
            aria-label="search GitHub username"
            value={username}
            onChange={handleInputChange}
            placeholder="Search GitHub username..."
            onKeyDown={hanldeKeyDown}
          />
          {noUserError && !username && (
            <span className="error-msg">No results</span>
          )}
          <button data-testid="search-button" className="search-container__btn">
            Search
          </button>
        </div>
      </form>
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

// TODO: implemnet accessinbility with aria if needed for the input box and the suggetion list dropdown
// TODO: Bonus:  Add animation forsmooth tansition of the suggestion list
