import "./styles/main.scss";
import Layout from "./layout";
import SearchBar from "./components/SearchBar";
import { lazy, Suspense, useState } from "react";
const UserBio = lazy(() => import('./components/UserBio'));
const SkeletonLoader = lazy(() => import('./components/UserBio/SkeletonLoader'));

function App() {
  const [selectedUser, setSelectedUser] = useState("octocat");
  const [noUserError, setNoUserError] = useState('');

  return (
    <Layout>
      <SearchBar setNoUserError={setNoUserError} noUserError={noUserError} setSelectedUser={setSelectedUser} />
      <Suspense fallback={<SkeletonLoader />}>
      <UserBio selecetedUser={selectedUser} setNoUserError={setNoUserError} />
      </Suspense>

    </Layout>
  );
}

export default App;
