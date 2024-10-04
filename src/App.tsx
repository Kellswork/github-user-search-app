import "./styles/main.scss";
import Layout from "./layout";
import SearchBar from "./components/SearchBar";
import { lazy, useState } from "react";
import useFetch from "./hooks/useFetch";
import { GitHubUserProp } from "./components/UserBio/type";
import SkeletonLoader from "./components/UserBio/SkeletonLoader";
import ErrorBoundary from "./components/ErrorBoundary";

const UserBio = lazy(() => import("./components/UserBio"));

function App() {
  const [selectedUser, setSelectedUser] = useState("octocat");

  const url = selectedUser
    ? `https://api.github.com/users/${selectedUser}`
    : "";

  const { data, error, isLoading } = useFetch<GitHubUserProp>(url);
  console.log("data", data);
  console.log("error", error);
  console.log("loading", isLoading);

  return (
    <Layout>
      <ErrorBoundary>
      <SearchBar noUserError={error} setSelectedUser={setSelectedUser} />
      </ErrorBoundary>
      {isLoading ? <SkeletonLoader /> : <UserBio data={data} />}
    </Layout>
  );
}

export default App;
