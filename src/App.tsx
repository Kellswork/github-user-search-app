import { useState } from "react";
import useFetch from "./hooks/useFetch";
import { GitHubUserProp } from "./components/UserBio/type";
import Layout from "./layout";
import ErrorBoundary from "./components/ErrorBoundary";
import UserBio from "./components/UserBio";
import SkeletonLoader from "./components/UserBio/SkeletonLoader";
import SearchBar from "./components/SearchBar";

/**
 * App component that renders the main application layout, a search bar for GitHub users,
 * and displays user bio information.
 *
 * It initializes the selected user to "octocat" and fetches the user data from the GitHub API.
 * The fetched data is displayed in the UserBio component, while a loading state is shown 
 * during the data fetching process.
 *
 * @returns {JSX.Element}
 */
function App() {
  const [selectedUser, setSelectedUser] = useState("octocat");

  // Construct the URL for the GitHub API based on the selected user
  const url = selectedUser
    ? `https://api.github.com/users/${selectedUser}`
    : "";

  // Fetch user data from the GitHub API
  const { data, error, isLoading } = useFetch<GitHubUserProp>(url);

  return (
    <Layout>
      <ErrorBoundary>
        <SearchBar noUserError={error} setSelectedUser={setSelectedUser} />
        {isLoading ? <SkeletonLoader /> : <UserBio data={data} />}
      </ErrorBoundary>
    </Layout>
  );
}

export default App;
