import React, { memo } from "react"; // Import memo
import useFetch from "../../hooks/useFetch";
interface SuggestionListProps {
  query: string;
  handleSuggestionClick: (selectedUsername: string) => void;
  setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuggestionList: React.FC<SuggestionListProps> = ({
  query,
  handleSuggestionClick,
  setShowSuggestions,
}) => {

  const { data, error } = useFetch(query);

  function handleClick(selectedUsername: string) {
    handleSuggestionClick(selectedUsername);
    setShowSuggestions(false);
  }
  
  // Use resource to read user data or return an empty array
  const limitedUsers = data === undefined ? [] : data.slice(0, 5); // Limit to 5 users


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
