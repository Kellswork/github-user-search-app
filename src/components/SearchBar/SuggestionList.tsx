import React, { memo } from "react"; // Import memo
import useFetch from "../../hooks/useFetch";
import { FetchDataProps } from "./type";
interface SuggestionListProps {
  query: string;
  handleSuggestionClick: (selectedUsername: string) => void;
}

const SuggestionList: React.FC<SuggestionListProps> = ({
  query,
  handleSuggestionClick,
}) => {
  const url = `https://api.github.com/search/users?q=${query}`;
  const { data, error } = useFetch<FetchDataProps>(url);

  function handleClick(selectedUsername: string) {
    handleSuggestionClick(selectedUsername);
  }

  // Use resource to read user data or return an empty array
  const limitedUsers =
    data === undefined || data === null ? [] : data.items.slice(0, 5); // Limit to 5 users

  if (query === "") return null;

  return (
    <div className="suggestion-list-container">
      {data === undefined || error ? (
        <p className="error">github free search rate limit exceeded</p>
      ) : (
        <ul>
          {limitedUsers.map((user: { login: string }) => (
            <li
              onClick={() => {
                handleClick(user.login);
              }}
              key={user.login}
            >
              {user.login}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
// add memo back
export default SuggestionList;
