import { highlightMatch } from "../../utils/highlightMatch";
import { UsersProps } from "./type";
interface SuggestionListProps {
  query: string;
  handleSuggestionClick: (selectedUsername: string) => void;
  suggestionList: UsersProps[];
  error: string | null;
  activeSuggestion: number;
  isLoading: boolean;
}

const SuggestionList: React.FC<SuggestionListProps> = ({
  handleSuggestionClick,
  query,
  suggestionList,
  activeSuggestion,
  error,
  isLoading
}) => {

  function handleClick(selectedUsername: string) {
    handleSuggestionClick(selectedUsername);
  }

  if (query === "") return null;
  return (
    <div data-testid="suggestion-list" className="suggestion-list-container">
      {(isLoading || suggestionList.length === 0) && null }
      { error ? (
        <p className="error">github free search rate limit exceeded</p>
      ) : (
        <ul>
          {suggestionList.map((user: { login: string }, index) => (
            <li
            className={activeSuggestion === index ? 'active' : ''}
              onClick={() => {
                handleClick(user.login);
              }}
              key={user.login}
            >
              {highlightMatch(user.login, query)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
// add memo back
export default SuggestionList;
