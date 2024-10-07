import "./styles/main.scss";
import Layout from "./layout";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import useFetch from "./hooks/useFetch";
import { GitHubUserProp } from "./components/UserBio/type";
import SkeletonLoader from "./components/UserBio/SkeletonLoader";
import ErrorBoundary from "./components/ErrorBoundary";
import UserBio from "./components/UserBio";

function App() {
  const [selectedUser, setSelectedUser] = useState("octocat");

  const url = selectedUser
    ? `https://api.github.com/users/${selectedUser}`
    : "";

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
