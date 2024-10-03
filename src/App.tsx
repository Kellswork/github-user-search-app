import "./styles/main.scss";
import Layout from "./layout";
import SearchBar from "./components/SearchBar";
import UserBio from "./components/UserBio";
import { useState } from "react";

function App() {
const [selectedUser, setSelectedUser] = useState('octocat')

  return (
    <Layout>
      <SearchBar setSelectedUser={setSelectedUser} />
     
      <UserBio selecetedUser={selectedUser} />
    
  
    </Layout>
  );
}

export default App;
