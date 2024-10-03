import React, { useState, useEffect, memo } from "react"; // Import memo
import { getData } from "../../api/fetchData";
import wrapPromise from "../../api/wrapPromise";

interface SuggestionListProps {
  query: string;
}

const SuggestionList: React.FC<SuggestionListProps> = memo(({ query }) => {
  // Implement suspense
  const [resource, setResource] = useState<any>(null);

  useEffect(() => {
    if (query) {
      const fetchDataSus = wrapPromise(getData(query));
      setResource(fetchDataSus);
    } else {
      setResource(null);
    }
  }, [query]);

  // Use resource to read user data or return an empty array
  const users = resource ? resource.read() : [];
  const limitedUsers = users.slice(0, 5); // Limit to 5 users

  return (
    <div>
      {users.length > 0 ? (
        <ul className="suggestion-list-container">
          {limitedUsers.map((user: { login: string }) => (
            <li key={user.login}>{user.login}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
});

export default SuggestionList;
